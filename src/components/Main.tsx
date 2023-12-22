import { StyleSheet } from "react-native";
import RepositoryList from "./RepositoryList";
import React from "react";
import { Navbar } from "./Navbar";
import theme from "../theme";
import Flex from "./Flex";
import { Navigate, Route, Routes } from "react-router-native";
import { SignIn } from "../views/SignIn";

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
              <Route path="/" element={<RepositoryList />} />
              <Route path="*" element={<Navigate to="/" />} />
              <Route path="/sign" element={<SignIn />} />
            </Routes>
        </Flex>
    )
}

export default Main;