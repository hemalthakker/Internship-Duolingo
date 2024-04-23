"use client"

import {Admin, Resource} from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import { CourseList } from "./course/list";
import { CourseCreate } from "./course/create";
import { CourseEdit } from "./course/edit";
import { UnitList } from "./unit/list";
import { UnitCreate } from "./unit/create";
import { UnitEdit } from "./unit/edit";

const dataProvider = simpleRestProvider("/api");

const App = () => {
    return(
    <Admin dataProvider={dataProvider}>
        <Resource 
            name="courses"
            recordRepresentation="title"
            list={CourseList}
            create={CourseCreate}
            edit={CourseEdit}
        >
        </Resource>

        <Resource 
            name="units"
            recordRepresentation="title"
            list={UnitList}
            create={UnitCreate}
            edit={UnitEdit}
        >
        </Resource> 
    </Admin>
)}

export default App;