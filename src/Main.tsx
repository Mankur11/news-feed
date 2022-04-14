import {getSectionsList} from './services/services';
import {Header} from './components/Header/Header';
import React, {useEffect} from 'react';
import {
  Sections,
  SectionsTitle,
  SectionsWrapper,
} from './components/Sections/styles';

import {PressableButton} from './components/Sections/TouchableComponents';
import {PickerElement} from './components/Picker/Picker';
import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators, State} from './state';
import {SectionListItem, Story} from './state/actions';
import moment from 'moment';
import {
  Container,
  PickerElementWrapper,
  PickersContainer,
  StoriesContainer,
  StoryAge,
  StoryAuthor,
  StoryContainer,
  StoryImage,
  StoryMetaContainer,
  StoryTitle,
} from './appStyles';

const Main = () => {
  const dispatch = useDispatch();
  const {
    setSection,
    setSectionList,
    setStories,
    setKeywords,
    setSelectedKeyword,
    setSelectedLocation,
    filterStories,
  } = bindActionCreators(actionCreators, dispatch);

  const sectionState = useSelector((state: State) => state.section);
  const storiesState = useSelector((state: State) => state.stories);
  const filtersState = useSelector((state: State) => state.filters);
  const {sectionList, selectedSection} = sectionState;
  const {storiesList, locations, keywords} = storiesState;
  const {selectedKeyword, selectedLocation} = filtersState;

  useEffect(() => {
    async function getData() {
      const _sectionsList = await getSectionsList();
      if (_sectionsList) {
        setSectionList(_sectionsList);
        setStories(_sectionsList[1].section);
        setSection(_sectionsList[1].section);
        setKeywords();
      }
    }
    getData();
  }, []);

  useEffect(() => {
    filterStories({
      selectedKeyword: selectedKeyword,
      selectedLocation: selectedLocation,
    });
  }, [selectedKeyword, selectedLocation]);

  return (
    <Container>
      <Header title="NYT News Feed" />
      <SectionsWrapper>
        <SectionsTitle>Section</SectionsTitle>
        <Sections>
          {sectionList.length > 0 &&
            sectionList.map((section: SectionListItem, index: number) => (
              <PressableButton
                key={index}
                onPress={() => {
                  setStories(section.section);
                  setSection(section.section);
                }}
                section={section}
                selected={section.section === selectedSection}
              />
            ))}
        </Sections>
      </SectionsWrapper>
      {storiesState && (
        <PickersContainer>
          <PickerElementWrapper>
            <PickerElement
              placeholder={'LOCATION'}
              items={locations}
              setSelectedItem={setSelectedLocation}
            />
          </PickerElementWrapper>
          <PickerElementWrapper>
            <PickerElement
              placeholder={'KEYWORDS'}
              items={keywords}
              setSelectedItem={setSelectedKeyword}
            />
          </PickerElementWrapper>
        </PickersContainer>
      )}
      <StoriesContainer>
        {storiesList.map((story: Story, index: number) => (
          <StoryContainer key={index}>
            {story.multimedia && story.multimedia[2] ? (
              <StoryImage source={{uri: story.multimedia[2].url}} />
            ) : (
              <StoryImage source={require('./assets/noImage.png')} />
            )}
            <StoryMetaContainer>
              <StoryTitle>{story.title}</StoryTitle>

              <StoryAuthor>{story.byline}</StoryAuthor>
              <StoryAge>{moment(story.created_date).fromNow()}</StoryAge>
            </StoryMetaContainer>
          </StoryContainer>
        ))}
      </StoriesContainer>
    </Container>
  );
};

export default Main;
