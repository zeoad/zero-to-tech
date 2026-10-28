// js/main.js

import { initTheme } from "./theme.js";
import { initProjects } from "./projects.js";
import { initNavigation } from "./navigation.js";
import { initRelease } from "./release.js";

// 初始化各个功能模块
initTheme();
initProjects();
initNavigation();
initRelease();

console.info("[MySpace] 所有模块初始化完成");