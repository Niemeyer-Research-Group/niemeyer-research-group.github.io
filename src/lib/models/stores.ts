import { readable } from "svelte/store";
import Profile from "./Profile";

import Kyle from "../../data/Kyle";

export const profile = readable<Profile>(new Profile(Kyle));
