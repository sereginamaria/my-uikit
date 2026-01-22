import { createRouter, createWebHistory } from "vue-router";
import Index from "@/views/Index.vue";
import ButtonView from "@/views/ButtonView.vue";
import TypographyView from "@/views/TypographyView.vue";
import CheckBoxView from "@/views/CheckBoxView.vue";
import RadioButtonView from "@/views/RadioButtonView.vue";
import ProgressView from "@/views/ProgressView.vue";
import InputView from "@/views/InputView.vue";
import TabsView from "@/views/TabsView.vue";
import TableView from "@/views/TableView.vue";
import AccordionView from "@/views/AccordionView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: 'Index',
            component: Index,
        },
        {
            path: "/button",
            name: 'Button',
            component: ButtonView,
        },
        {
            path: "/typography",
            name: 'Typography',
            component: TypographyView,
        },
        {
            path: "/checkbox",
            name: 'Checkbox',
            component: CheckBoxView,
        },
        {
            path: "/radiobutton",
            name: 'Radiobutton',
            component: RadioButtonView,
        },
        {
            path: "/progress",
            name: 'Progress',
            component: ProgressView,
        },
        {
            path: "/input",
            name: 'Input',
            component: InputView,
        },
        {
            path: "/tabs",
            name: 'Tabs',
            component: TabsView,
        },
        {
            path: "/table",
            name: 'Table',
            component: TableView,
        },
        {
            path: "/accordion",
            name: 'Accordion',
            component: AccordionView,
        }
    ]
})

export default router;