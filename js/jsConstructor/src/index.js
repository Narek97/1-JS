import './styles/main.css'
import {model} from './model'
import {Site} from "./classes/site";
import {SideBar} from "./classes/sideBar";

const site = new Site('#site')
const updateCallback = newBlock => {
    model.push(newBlock)
    site.render(model)
}

new SideBar('#panel',updateCallback)

site.render(model)

