var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_2835083a = require("../../chunks/index-2835083a.js");
var IconBase_svelte_svelte_type_style_lang = "";
const css = {
  code: "svg.svelte-3h8371{stroke:currentColor;fill:currentColor;stroke-width:0;width:100%;height:auto;max-height:100%}",
  map: null
};
const IconBase = (0, import_index_2835083a.c)(($$result, $$props, $$bindings, slots) => {
  let { title = null } = $$props;
  let { viewBox } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox !== void 0)
    $$bindings.viewBox(viewBox);
  $$result.css.add(css);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${(0, import_index_2835083a.a)("viewBox", viewBox, 0)} class="${"svelte-3h8371"}">${title ? `<title>${(0, import_index_2835083a.e)(title)}</title>` : ``}${slots.default ? slots.default({}) : ``}</svg>`;
});
const FaGithub = (0, import_index_2835083a.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_2835083a.v)(IconBase, "IconBase").$$render($$result, Object.assign({ viewBox: "0 0 496 512" }, $$props), {}, {
    default: () => {
      return `<path d="${"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}"></path>`;
    }
  })}`;
});
const FaLinkedinIn = (0, import_index_2835083a.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_2835083a.v)(IconBase, "IconBase").$$render($$result, Object.assign({ viewBox: "0 0 448 512" }, $$props), {}, {
    default: () => {
      return `<path d="${"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"}"></path>`;
    }
  })}`;
});
const FaReact = (0, import_index_2835083a.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_2835083a.v)(IconBase, "IconBase").$$render($$result, Object.assign({ viewBox: "0 0 512 512" }, $$props), {}, {
    default: () => {
      return `<path d="${"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"}"></path>`;
    }
  })}`;
});
const FaCss3Alt = (0, import_index_2835083a.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_2835083a.v)(IconBase, "IconBase").$$render($$result, Object.assign({ viewBox: "0 0 384 512" }, $$props), {}, {
    default: () => {
      return `<path d="${"M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"}"></path>`;
    }
  })}`;
});
const FaNodeJs = (0, import_index_2835083a.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_2835083a.v)(IconBase, "IconBase").$$render($$result, Object.assign({ viewBox: "0 0 448 512" }, $$props), {}, {
    default: () => {
      return `<path d="${"M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"}"></path>`;
    }
  })}`;
});
const Routes = (0, import_index_2835083a.c)(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"min-h-screen"}"><div class="${"bg-[#1e1e1e] p-8 lg:p-16 rounded-lg"}"><h1 class="${"text-3xl text-gray-300 font-bold mb-2"}">Caleb Lee</h1>
        <div class="${"flex text-center mt-8 mb-2"}"><div class="${"flex w-8 lg:w-8 lg:h-8 mr-10 cursor-pointer hover:text-blue-500 transition duration-150"}"><a target="${"_blank"}" href="${"https://www.linkedin.com/in/caleb-lee-92b700239/"}">${(0, import_index_2835083a.v)(FaLinkedinIn, "FaLinkedinIn").$$render($$result, {}, {}, {})}</a></div>
            <div class="${"flex w-8 lg:w-8 lg:h-8 mr-10 cursor-pointer hover:text-gray-50 transition duration-150"}"><a target="${"_blank"}" href="${"https://github.com/a-pillow"}">${(0, import_index_2835083a.v)(FaGithub, "FaGithub").$$render($$result, {}, {}, {})}</a></div></div>
        <div class="${"mt-8"}"><button class="${"rounded-xl bg-red-900 font-bold text-gray-300 hover:bg-red-700 hover:shadow-glow hover:-translate-y-2 hover:text-white transition duration-100"}"><a class="${"py-4 px-8 inline-block w-100 h-100"}" href="${"src/assets/resume.pdf"}" target="${"_blank"}">Download my Resume (PDF)
                </a></button></div></div></div>

<div class="${"min-h-screen pt-8"}" id="${"about"}"><div class="${"bg-[#1e1e1e] p-8 lg:p-16 rounded-lg"}"><div class="${"text-gray-300 font-bold text-3xl"}"><h1 class>About Me</h1></div>

        <p class="${"mt-8 text-lg"}">My name is Caleb, and I am a 17 year old highschool student
            living in Naperville, Illinois.
            <br>
            <br>
            Back in fifth grade, I joined a coding club at my elementary school.
            I was introduced to block coding on <a class="${"text-blue-400 hover:text-blue-200 duration-150"}" href="${"https://code.org/"}" target="${"_blank"}">code.org</a> and was immediately hooked.
            I loved using computers, and I naturally fell in love with programming. The moment
            I came home I started watching coding videos on youtube, spending my days
            fiddling with games, websites, and anything I was interested in.
            <br>
            <br>
            Currently, my love for progamming is still alive and I continue to spend 
            my days learning and getting lost into the deep sea of technology. I hope to pursue a Computer Science degree
            in my future and, ultimately, a lifetime of making a difference in the tech industry.
        </p></div></div>

<div class="${"min-h-screen pt-8"}" id="${"projects"}"><div class="${"bg-[#1e1e1e] p-8 lg:p-16 rounded-lg"}"><div class="${"text-gray-300 font-bold text-3xl mb-8"}"><h1 class>Projects</h1></div>

        <div class="${"grid grid-cols-1 gap-10"}"><div><div class="${"w-full bg-hackftw bg-cover rounded-xl mb-4"}"><div class="${"w-full h-full backdrop-filter backdrop-blur-sm rounded-xl p-4"}"><h1 class="${"text-gray-900 font-bold text-2xl mb-3"}"><a href="${"https://github.com/a-pillow/hackftw-2022"}" target="${"_blank"}" class="${"cursor-pointer hover:text-gray-700 transition duration-200"}">HackFTW 2022
                            </a></h1>
                        <div class="${"text-gray-900"}"><p class="${"mt-3"}">This website informs people of the large negative impact people have on 
                                the world through statistics and images before incentivizing activism in
                                 local communities through volunteering and donations.</p></div></div></div>
                <div class="${"flex justify-evenly lg:justify-start lg:gap-x-8"}"><div class="${"w-8 h-8 hover:text-green-400 transition duration-150"}">${(0, import_index_2835083a.v)(FaNodeJs, "FaNodeJs").$$render($$result, {}, {}, {})}</div>
                    <div class="${"w-8 h-8 hover:text-blue-400 transition duration-150"}">${(0, import_index_2835083a.v)(FaReact, "FaReact").$$render($$result, {}, {}, {})}</div>
                    <div class="${"w-8 h-8 hover:text-blue-800 transition duration-150"}">${(0, import_index_2835083a.v)(FaCss3Alt, "FaCss3Alt").$$render($$result, {}, {}, {})}</div></div></div>
            </div></div></div>`;
});
