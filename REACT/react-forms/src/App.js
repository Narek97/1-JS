import React from 'react';
import YoutubeForm from "./components/YotubeForm";
import FormikContainer from "./components1/FormikContainer";
import Login from "./authentication/Login";
import Registration from "./authentication/Registration";
import EnrollmentForm from "./authentication/EnrollmentForm";

import {theme, ThemeProvider} from '@chakra-ui/core'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                {/* <YoutubeForm/> */}
                {/* ---------------- */}
                <FormikContainer/>
                {/* ---------------- */}
                {/* <Login/> */}
                {/* <Registration/> */}
                {/*<EnrollmentForm/>*/}
            </div>
        </ThemeProvider>
    );
}

export default App;




