import {
    Store,
    install
} from "vuex";
import Vue from "vue";
import banner from "./banner";
import about from "@/store/about";
import project from "@/store/project";
import setting from "./setting";

if ( !window.Vuex ) {
    install ( Vue );
}
export default new Store ( {
                               modules: {
                                   project,
                                   about,
                                   banner,
                                   setting
                               },
                               strict : true
                           } );