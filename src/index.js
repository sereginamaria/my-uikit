import './styles/global.scss'

import Accordion from "@/components/Accordion.vue";
import Button from "@/components/Button.vue";
import Checkbox from "@/components/Checkbox/Checkbox.vue";
import CheckboxGroup from "@/components/Checkbox/CheckboxGroup.vue";
import Input from "@/components/Input.vue";
import ProgressBar from "@/components/Progress/ProgressBar.vue";
import ProgressCircle from "@/components/Progress/ProgressCircle.vue";
import Radiobutton from "@/components/Radiobutton.vue";
import BaseTable from "@/components/Table/BaseTable.vue";
import Tabs from "@/components/Tabs.vue";


// ИЛИ более коротко:
export {
    Accordion,
    Button,
    Checkbox,
    CheckboxGroup,
    Input,
    ProgressBar,
    ProgressCircle,
    Radiobutton,
    BaseTable,
    Tabs
}

export default {
    install: (app, options) => {
        console.log('Installing UI Kit...')
        app.component("Accordion", Accordion);
        app.component("Button", Button);
        app.component("Checkbox", Checkbox);
        app.component("CheckboxGroup", CheckboxGroup);
        app.component("Input", Input);
        app.component("ProgressBar", ProgressBar);
        app.component("ProgressCircle", ProgressCircle);
        app.component("Radiobutton", Radiobutton);
        app.component("BaseTable", BaseTable);
        app.component("Tabs", Tabs);
        console.log('Components registered')
    }
};