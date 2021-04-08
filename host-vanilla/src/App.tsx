import "./index.css";

import {load, subscribe} from 'growlers/store'
import VanillaTaps from "growlers/VanillaTaps"
import VanillaSearch from "growlers/VanillaSearch"
import VanillaCart from "growlers/VanillaCart"

VanillaSearch(".search")
VanillaCart(".cart")
VanillaTaps(".taps")

load("hv-taplist")

subscribe(({filteredTaps}) => {
  document.querySelector('.beverages').innerHTML = filteredTaps.map(({beverageName}) => beverageName).join(", ")
})