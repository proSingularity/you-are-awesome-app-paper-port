import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, View } from "react-native";
import { Surface, useTheme } from "react-native-paper";
import { Route } from "../../navigation/Route";
import MyAppbar from "../navigation/MyAppbar";

interface Props {
    route: Route;
}

const Layout: FC<Props> = (props) => {
    const { t } = useTranslation();
    const theme = useTheme();
    const styles = StyleSheet.create({
        container: {
            width: "100%",
            height: "100%",
            backgroundColor: theme.dark
                ? theme.colors.background
                : theme.colors.surface,
        },
        contentContainer: {
            flex: 1,
        },
    });

    return (
        <Surface style={styles.container}>
            <MyAppbar title={t(props.route)} />
            <View style={styles.contentContainer}>{props.children}</View>
        </Surface>
    );
};
export default Layout;
