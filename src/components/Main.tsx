import { Dimensions, StyleSheet, View  } from "react-native";
import RepositoryList from "./RepositoryList";
import React from "react";
import { Navbar } from "./Navbar";
import theme from "../theme";
import Flex from "./Flex";
import { Navigate, Route, Routes } from "react-router-native";
import { SignIn } from "../views/SignIn";

const repositories = [
    {
      id: 'jaredpalmer.formik',
      fullName: 'jaredpalmer/formik',
      description: 'Build forms in React, without the tears',
      language: 'TypeScript',
      forksCount: 1589,
      stargazersCount: 21553,
      ratingAverage: 88,
      reviewCount: 4,
      ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
    },
    {
      id: 'rails.rails',
      fullName: 'rails/rails',
      description: 'Ruby on Rails',
      language: 'Ruby',
      forksCount: 18349,
      stargazersCount: 45377,
      ratingAverage: 100,
      reviewCount: 2,
      ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/4223?v=4',
    },
    {
      id: 'django.djangobraw',
      fullName: 'django/django',
      description: 'The Web framework for perfectionists with deadlines.',
      language: 'Python',
      forksCount: 21015,
      stargazersCount: 48496,
      ratingAverage: 73,
      reviewCount: 5,
      ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4',
    },
    {
      id: 'reduxjs.redux',
      fullName: 'reduxjs/redux',
      description: 'Predictable state container for JavaScript apps',
      language: 'TypeScript',
      forksCount: 13902,
      stargazersCount: 52869,
      ratingAverage: 0,
      reviewCount: 0,
      ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
    },
    {
        id: 'reduxjs.redux.molinari',
        fullName: 'reduxjs/redux/molinari',
        description: 'Predictable state container for JavaScript apps',
        language: 'TypeScript',
        forksCount: 13902,
        stargazersCount: 52869,
        ratingAverage: 0,
        reviewCount: 0,
        ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
      },
      {
        id: 'django.django',
        fullName: 'django/django',
        description: 'The Web framework for perfectionists with deadlines.',
        language: 'Python',
        forksCount: 21015,
        stargazersCount: 48496,
        ratingAverage: 73,
        reviewCount: 5,
        ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4',
      },
  ];

  const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: theme.colors.mainBg,
      flex: 1,
    }
  })


const Main = () => {
    return (
        <Flex style={styles.mainContainer} direction={'col'}>
            <Navbar />
            <Routes>
              <Route path="/" element={<RepositoryList repositories={repositories} />} />
              <Route path="*" element={<Navigate to="/" />} />
              <Route path="/sign" element={<SignIn />} />
            </Routes>
        </Flex>
    )
}

export default Main;