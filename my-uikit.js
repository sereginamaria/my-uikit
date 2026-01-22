import { ref as tn, createElementBlock as w, openBlock as k, createElementVNode as P, createCommentVNode as qt, toDisplayString as T, renderSlot as Ze, defineComponent as et, computed as N, watch as an, h as Vt, normalizeClass as ge, createVNode as tt, unref as nn, Fragment as Z, renderList as we, normalizeStyle as B, TransitionGroup as rn, withCtx as on } from "vue";
const R = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [n, r] of t)
    a[n] = r;
  return a;
}, sn = { class: "accordion" }, ln = {
  key: 0,
  class: "text"
}, fn = {
  __name: "Accordion",
  props: {
    title: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = tn(!0), a = () => {
      t.value = !t.value;
    };
    return (n, r) => (k(), w("div", sn, [
      P("span", {
        class: "title",
        onClick: a
      }, T(e.title), 1),
      t.value ? (k(), w("div", ln, [
        Ze(n.$slots, "default", {}, void 0, !0)
      ])) : qt("", !0)
    ]));
  }
}, un = /* @__PURE__ */ R(fn, [["__scopeId", "data-v-1b3f6aa6"]]);
function De(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var a = 0, n = Array(t); a < t; a++) n[a] = e[a];
  return n;
}
function cn(e) {
  if (Array.isArray(e)) return e;
}
function dn(e) {
  if (Array.isArray(e)) return De(e);
}
function mn(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function vn(e, t) {
  for (var a = 0; a < t.length; a++) {
    var n = t[a];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Kt(n.key), n);
  }
}
function hn(e, t, a) {
  return t && vn(e.prototype, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function me(e, t) {
  var a = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!a) {
    if (Array.isArray(e) || (a = at(e)) || t) {
      a && (e = a);
      var n = 0, r = function() {
      };
      return {
        s: r,
        n: function() {
          return n >= e.length ? {
            done: !0
          } : {
            done: !1,
            value: e[n++]
          };
        },
        e: function(l) {
          throw l;
        },
        f: r
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var i, o = !0, s = !1;
  return {
    s: function() {
      a = a.call(e);
    },
    n: function() {
      var l = a.next();
      return o = l.done, l;
    },
    e: function(l) {
      s = !0, i = l;
    },
    f: function() {
      try {
        o || a.return == null || a.return();
      } finally {
        if (s) throw i;
      }
    }
  };
}
function g(e, t, a) {
  return (t = Kt(t)) in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e;
}
function gn(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function pn(e, t) {
  var a = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (a != null) {
    var n, r, i, o, s = [], l = !0, u = !1;
    try {
      if (i = (a = a.call(e)).next, t === 0) {
        if (Object(a) !== a) return;
        l = !1;
      } else for (; !(l = (n = i.call(a)).done) && (s.push(n.value), s.length !== t); l = !0) ;
    } catch (c) {
      u = !0, r = c;
    } finally {
      try {
        if (!l && a.return != null && (o = a.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw r;
      }
    }
    return s;
  }
}
function yn() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function bn() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ht(e, t) {
  var a = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), a.push.apply(a, n);
  }
  return a;
}
function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ht(Object(a), !0).forEach(function(n) {
      g(e, n, a[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : ht(Object(a)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(a, n));
    });
  }
  return e;
}
function ke(e, t) {
  return cn(e) || pn(e, t) || at(e, t) || yn();
}
function D(e) {
  return dn(e) || gn(e) || at(e) || bn();
}
function xn(e, t) {
  if (typeof e != "object" || !e) return e;
  var a = e[Symbol.toPrimitive];
  if (a !== void 0) {
    var n = a.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Kt(e) {
  var t = xn(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function pe(e) {
  "@babel/helpers - typeof";
  return pe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, pe(e);
}
function at(e, t) {
  if (e) {
    if (typeof e == "string") return De(e, t);
    var a = {}.toString.call(e).slice(8, -1);
    return a === "Object" && e.constructor && (a = e.constructor.name), a === "Map" || a === "Set" ? Array.from(e) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? De(e, t) : void 0;
  }
}
var gt = function() {
}, nt = {}, Xt = {}, Jt = null, Qt = {
  mark: gt,
  measure: gt
};
try {
  typeof window < "u" && (nt = window), typeof document < "u" && (Xt = document), typeof MutationObserver < "u" && (Jt = MutationObserver), typeof performance < "u" && (Qt = performance);
} catch {
}
var Sn = nt.navigator || {}, pt = Sn.userAgent, yt = pt === void 0 ? "" : pt, U = nt, x = Xt, bt = Jt, ce = Qt;
U.document;
var W = !!x.documentElement && !!x.head && typeof x.addEventListener == "function" && typeof x.createElement == "function", Zt = ~yt.indexOf("MSIE") || ~yt.indexOf("Trident/"), _e, wn = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, kn = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i, ea = {
  classic: {
    fa: "solid",
    fas: "solid",
    "fa-solid": "solid",
    far: "regular",
    "fa-regular": "regular",
    fal: "light",
    "fa-light": "light",
    fat: "thin",
    "fa-thin": "thin",
    fab: "brands",
    "fa-brands": "brands"
  },
  duotone: {
    fa: "solid",
    fad: "solid",
    "fa-solid": "solid",
    "fa-duotone": "solid",
    fadr: "regular",
    "fa-regular": "regular",
    fadl: "light",
    "fa-light": "light",
    fadt: "thin",
    "fa-thin": "thin"
  },
  sharp: {
    fa: "solid",
    fass: "solid",
    "fa-solid": "solid",
    fasr: "regular",
    "fa-regular": "regular",
    fasl: "light",
    "fa-light": "light",
    fast: "thin",
    "fa-thin": "thin"
  },
  "sharp-duotone": {
    fa: "solid",
    fasds: "solid",
    "fa-solid": "solid",
    fasdr: "regular",
    "fa-regular": "regular",
    fasdl: "light",
    "fa-light": "light",
    fasdt: "thin",
    "fa-thin": "thin"
  },
  slab: {
    "fa-regular": "regular",
    faslr: "regular"
  },
  "slab-press": {
    "fa-regular": "regular",
    faslpr: "regular"
  },
  thumbprint: {
    "fa-light": "light",
    fatl: "light"
  },
  whiteboard: {
    "fa-semibold": "semibold",
    fawsb: "semibold"
  },
  notdog: {
    "fa-solid": "solid",
    fans: "solid"
  },
  "notdog-duo": {
    "fa-solid": "solid",
    fands: "solid"
  },
  etch: {
    "fa-solid": "solid",
    faes: "solid"
  },
  jelly: {
    "fa-regular": "regular",
    fajr: "regular"
  },
  "jelly-fill": {
    "fa-regular": "regular",
    fajfr: "regular"
  },
  "jelly-duo": {
    "fa-regular": "regular",
    fajdr: "regular"
  },
  chisel: {
    "fa-regular": "regular",
    facr: "regular"
  },
  utility: {
    "fa-semibold": "semibold",
    fausb: "semibold"
  },
  "utility-duo": {
    "fa-semibold": "semibold",
    faudsb: "semibold"
  },
  "utility-fill": {
    "fa-semibold": "semibold",
    faufsb: "semibold"
  }
}, An = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, ta = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], O = "classic", le = "duotone", aa = "sharp", na = "sharp-duotone", ra = "chisel", ia = "etch", oa = "jelly", sa = "jelly-duo", la = "jelly-fill", fa = "notdog", ua = "notdog-duo", ca = "slab", da = "slab-press", ma = "thumbprint", va = "utility", ha = "utility-duo", ga = "utility-fill", pa = "whiteboard", In = "Classic", Pn = "Duotone", On = "Sharp", En = "Sharp Duotone", _n = "Chisel", Cn = "Etch", Fn = "Jelly", Nn = "Jelly Duo", $n = "Jelly Fill", jn = "Notdog", Tn = "Notdog Duo", Dn = "Slab", Ln = "Slab Press", Mn = "Thumbprint", zn = "Utility", Rn = "Utility Duo", Wn = "Utility Fill", Bn = "Whiteboard", ya = [O, le, aa, na, ra, ia, oa, sa, la, fa, ua, ca, da, ma, va, ha, ga, pa];
_e = {}, g(g(g(g(g(g(g(g(g(g(_e, O, In), le, Pn), aa, On), na, En), ra, _n), ia, Cn), oa, Fn), sa, Nn), la, $n), fa, jn), g(g(g(g(g(g(g(g(_e, ua, Tn), ca, Dn), da, Ln), ma, Mn), va, zn), ha, Rn), ga, Wn), pa, Bn);
var Un = {
  classic: {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  duotone: {
    900: "fad",
    400: "fadr",
    300: "fadl",
    100: "fadt"
  },
  sharp: {
    900: "fass",
    400: "fasr",
    300: "fasl",
    100: "fast"
  },
  "sharp-duotone": {
    900: "fasds",
    400: "fasdr",
    300: "fasdl",
    100: "fasdt"
  },
  slab: {
    400: "faslr"
  },
  "slab-press": {
    400: "faslpr"
  },
  whiteboard: {
    600: "fawsb"
  },
  thumbprint: {
    300: "fatl"
  },
  notdog: {
    900: "fans"
  },
  "notdog-duo": {
    900: "fands"
  },
  etch: {
    900: "faes"
  },
  chisel: {
    400: "facr"
  },
  jelly: {
    400: "fajr"
  },
  "jelly-fill": {
    400: "fajfr"
  },
  "jelly-duo": {
    400: "fajdr"
  },
  utility: {
    600: "fausb"
  },
  "utility-duo": {
    600: "faudsb"
  },
  "utility-fill": {
    600: "faufsb"
  }
}, Yn = {
  "Font Awesome 7 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 7 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  "Font Awesome 7 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 7 Duotone": {
    900: "fad",
    400: "fadr",
    normal: "fadr",
    300: "fadl",
    100: "fadt"
  },
  "Font Awesome 7 Sharp": {
    900: "fass",
    400: "fasr",
    normal: "fasr",
    300: "fasl",
    100: "fast"
  },
  "Font Awesome 7 Sharp Duotone": {
    900: "fasds",
    400: "fasdr",
    normal: "fasdr",
    300: "fasdl",
    100: "fasdt"
  },
  "Font Awesome 7 Jelly": {
    400: "fajr",
    normal: "fajr"
  },
  "Font Awesome 7 Jelly Fill": {
    400: "fajfr",
    normal: "fajfr"
  },
  "Font Awesome 7 Jelly Duo": {
    400: "fajdr",
    normal: "fajdr"
  },
  "Font Awesome 7 Slab": {
    400: "faslr",
    normal: "faslr"
  },
  "Font Awesome 7 Slab Press": {
    400: "faslpr",
    normal: "faslpr"
  },
  "Font Awesome 7 Thumbprint": {
    300: "fatl",
    normal: "fatl"
  },
  "Font Awesome 7 Notdog": {
    900: "fans",
    normal: "fans"
  },
  "Font Awesome 7 Notdog Duo": {
    900: "fands",
    normal: "fands"
  },
  "Font Awesome 7 Etch": {
    900: "faes",
    normal: "faes"
  },
  "Font Awesome 7 Chisel": {
    400: "facr",
    normal: "facr"
  },
  "Font Awesome 7 Whiteboard": {
    600: "fawsb",
    normal: "fawsb"
  },
  "Font Awesome 7 Utility": {
    600: "fausb",
    normal: "fausb"
  },
  "Font Awesome 7 Utility Duo": {
    600: "faudsb",
    normal: "faudsb"
  },
  "Font Awesome 7 Utility Fill": {
    600: "faufsb",
    normal: "faufsb"
  }
}, Hn = /* @__PURE__ */ new Map([["classic", {
  defaultShortPrefixId: "fas",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin", "brands"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["duotone", {
  defaultShortPrefixId: "fad",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp", {
  defaultShortPrefixId: "fass",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp-duotone", {
  defaultShortPrefixId: "fasds",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["chisel", {
  defaultShortPrefixId: "facr",
  defaultStyleId: "regular",
  styleIds: ["regular"],
  futureStyleIds: [],
  defaultFontWeight: 400
}], ["etch", {
  defaultShortPrefixId: "faes",
  defaultStyleId: "solid",
  styleIds: ["solid"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["jelly", {
  defaultShortPrefixId: "fajr",
  defaultStyleId: "regular",
  styleIds: ["regular"],
  futureStyleIds: [],
  defaultFontWeight: 400
}], ["jelly-duo", {
  defaultShortPrefixId: "fajdr",
  defaultStyleId: "regular",
  styleIds: ["regular"],
  futureStyleIds: [],
  defaultFontWeight: 400
}], ["jelly-fill", {
  defaultShortPrefixId: "fajfr",
  defaultStyleId: "regular",
  styleIds: ["regular"],
  futureStyleIds: [],
  defaultFontWeight: 400
}], ["notdog", {
  defaultShortPrefixId: "fans",
  defaultStyleId: "solid",
  styleIds: ["solid"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["notdog-duo", {
  defaultShortPrefixId: "fands",
  defaultStyleId: "solid",
  styleIds: ["solid"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["slab", {
  defaultShortPrefixId: "faslr",
  defaultStyleId: "regular",
  styleIds: ["regular"],
  futureStyleIds: [],
  defaultFontWeight: 400
}], ["slab-press", {
  defaultShortPrefixId: "faslpr",
  defaultStyleId: "regular",
  styleIds: ["regular"],
  futureStyleIds: [],
  defaultFontWeight: 400
}], ["thumbprint", {
  defaultShortPrefixId: "fatl",
  defaultStyleId: "light",
  styleIds: ["light"],
  futureStyleIds: [],
  defaultFontWeight: 300
}], ["utility", {
  defaultShortPrefixId: "fausb",
  defaultStyleId: "semibold",
  styleIds: ["semibold"],
  futureStyleIds: [],
  defaultFontWeight: 600
}], ["utility-duo", {
  defaultShortPrefixId: "faudsb",
  defaultStyleId: "semibold",
  styleIds: ["semibold"],
  futureStyleIds: [],
  defaultFontWeight: 600
}], ["utility-fill", {
  defaultShortPrefixId: "faufsb",
  defaultStyleId: "semibold",
  styleIds: ["semibold"],
  futureStyleIds: [],
  defaultFontWeight: 600
}], ["whiteboard", {
  defaultShortPrefixId: "fawsb",
  defaultStyleId: "semibold",
  styleIds: ["semibold"],
  futureStyleIds: [],
  defaultFontWeight: 600
}]]), Gn = {
  chisel: {
    regular: "facr"
  },
  classic: {
    brands: "fab",
    light: "fal",
    regular: "far",
    solid: "fas",
    thin: "fat"
  },
  duotone: {
    light: "fadl",
    regular: "fadr",
    solid: "fad",
    thin: "fadt"
  },
  etch: {
    solid: "faes"
  },
  jelly: {
    regular: "fajr"
  },
  "jelly-duo": {
    regular: "fajdr"
  },
  "jelly-fill": {
    regular: "fajfr"
  },
  notdog: {
    solid: "fans"
  },
  "notdog-duo": {
    solid: "fands"
  },
  sharp: {
    light: "fasl",
    regular: "fasr",
    solid: "fass",
    thin: "fast"
  },
  "sharp-duotone": {
    light: "fasdl",
    regular: "fasdr",
    solid: "fasds",
    thin: "fasdt"
  },
  slab: {
    regular: "faslr"
  },
  "slab-press": {
    regular: "faslpr"
  },
  thumbprint: {
    light: "fatl"
  },
  utility: {
    semibold: "fausb"
  },
  "utility-duo": {
    semibold: "faudsb"
  },
  "utility-fill": {
    semibold: "faufsb"
  },
  whiteboard: {
    semibold: "fawsb"
  }
}, ba = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], xt = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, qn = ["kit"], Vn = "kit", Kn = "kit-duotone", Xn = "Kit", Jn = "Kit Duotone";
g(g({}, Vn, Xn), Kn, Jn);
var Qn = {
  kit: {
    "fa-kit": "fak"
  }
}, Zn = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, er = {
  kit: {
    fak: "fa-kit"
  }
}, St = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
}, Ce, de = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, tr = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], ar = "classic", nr = "duotone", rr = "sharp", ir = "sharp-duotone", or = "chisel", sr = "etch", lr = "jelly", fr = "jelly-duo", ur = "jelly-fill", cr = "notdog", dr = "notdog-duo", mr = "slab", vr = "slab-press", hr = "thumbprint", gr = "utility", pr = "utility-duo", yr = "utility-fill", br = "whiteboard", xr = "Classic", Sr = "Duotone", wr = "Sharp", kr = "Sharp Duotone", Ar = "Chisel", Ir = "Etch", Pr = "Jelly", Or = "Jelly Duo", Er = "Jelly Fill", _r = "Notdog", Cr = "Notdog Duo", Fr = "Slab", Nr = "Slab Press", $r = "Thumbprint", jr = "Utility", Tr = "Utility Duo", Dr = "Utility Fill", Lr = "Whiteboard";
Ce = {}, g(g(g(g(g(g(g(g(g(g(Ce, ar, xr), nr, Sr), rr, wr), ir, kr), or, Ar), sr, Ir), lr, Pr), fr, Or), ur, Er), cr, _r), g(g(g(g(g(g(g(g(Ce, dr, Cr), mr, Fr), vr, Nr), hr, $r), gr, jr), pr, Tr), yr, Dr), br, Lr);
var Mr = "kit", zr = "kit-duotone", Rr = "Kit", Wr = "Kit Duotone";
g(g({}, Mr, Rr), zr, Wr);
var Br = {
  classic: {
    "fa-brands": "fab",
    "fa-duotone": "fad",
    "fa-light": "fal",
    "fa-regular": "far",
    "fa-solid": "fas",
    "fa-thin": "fat"
  },
  duotone: {
    "fa-regular": "fadr",
    "fa-light": "fadl",
    "fa-thin": "fadt"
  },
  sharp: {
    "fa-solid": "fass",
    "fa-regular": "fasr",
    "fa-light": "fasl",
    "fa-thin": "fast"
  },
  "sharp-duotone": {
    "fa-solid": "fasds",
    "fa-regular": "fasdr",
    "fa-light": "fasdl",
    "fa-thin": "fasdt"
  },
  slab: {
    "fa-regular": "faslr"
  },
  "slab-press": {
    "fa-regular": "faslpr"
  },
  whiteboard: {
    "fa-semibold": "fawsb"
  },
  thumbprint: {
    "fa-light": "fatl"
  },
  notdog: {
    "fa-solid": "fans"
  },
  "notdog-duo": {
    "fa-solid": "fands"
  },
  etch: {
    "fa-solid": "faes"
  },
  jelly: {
    "fa-regular": "fajr"
  },
  "jelly-fill": {
    "fa-regular": "fajfr"
  },
  "jelly-duo": {
    "fa-regular": "fajdr"
  },
  chisel: {
    "fa-regular": "facr"
  },
  utility: {
    "fa-semibold": "fausb"
  },
  "utility-duo": {
    "fa-semibold": "faudsb"
  },
  "utility-fill": {
    "fa-semibold": "faufsb"
  }
}, Ur = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"],
  slab: ["faslr"],
  "slab-press": ["faslpr"],
  whiteboard: ["fawsb"],
  thumbprint: ["fatl"],
  notdog: ["fans"],
  "notdog-duo": ["fands"],
  etch: ["faes"],
  jelly: ["fajr"],
  "jelly-fill": ["fajfr"],
  "jelly-duo": ["fajdr"],
  chisel: ["facr"],
  utility: ["fausb"],
  "utility-duo": ["faudsb"],
  "utility-fill": ["faufsb"]
}, Le = {
  classic: {
    fab: "fa-brands",
    fad: "fa-duotone",
    fal: "fa-light",
    far: "fa-regular",
    fas: "fa-solid",
    fat: "fa-thin"
  },
  duotone: {
    fadr: "fa-regular",
    fadl: "fa-light",
    fadt: "fa-thin"
  },
  sharp: {
    fass: "fa-solid",
    fasr: "fa-regular",
    fasl: "fa-light",
    fast: "fa-thin"
  },
  "sharp-duotone": {
    fasds: "fa-solid",
    fasdr: "fa-regular",
    fasdl: "fa-light",
    fasdt: "fa-thin"
  },
  slab: {
    faslr: "fa-regular"
  },
  "slab-press": {
    faslpr: "fa-regular"
  },
  whiteboard: {
    fawsb: "fa-semibold"
  },
  thumbprint: {
    fatl: "fa-light"
  },
  notdog: {
    fans: "fa-solid"
  },
  "notdog-duo": {
    fands: "fa-solid"
  },
  etch: {
    faes: "fa-solid"
  },
  jelly: {
    fajr: "fa-regular"
  },
  "jelly-fill": {
    fajfr: "fa-regular"
  },
  "jelly-duo": {
    fajdr: "fa-regular"
  },
  chisel: {
    facr: "fa-regular"
  },
  utility: {
    fausb: "fa-semibold"
  },
  "utility-duo": {
    faudsb: "fa-semibold"
  },
  "utility-fill": {
    faufsb: "fa-semibold"
  }
}, Yr = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"], xa = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(tr, Yr), Hr = ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"], Sa = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Gr = Sa.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), qr = ["aw", "fw", "pull-left", "pull-right"], Vr = [].concat(D(Object.keys(Ur)), Hr, qr, ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", de.GROUP, de.SWAP_OPACITY, de.PRIMARY, de.SECONDARY]).concat(Sa.map(function(e) {
  return "".concat(e, "x");
})).concat(Gr.map(function(e) {
  return "w-".concat(e);
})), Kr = {
  "Font Awesome 5 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 5 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal"
  },
  "Font Awesome 5 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 5 Duotone": {
    900: "fad"
  }
}, M = "___FONT_AWESOME___", Me = 16, wa = "fa", ka = "svg-inline--fa", q = "data-fa-i2svg", ze = "data-fa-pseudo-element", Xr = "data-fa-pseudo-element-pending", rt = "data-prefix", it = "data-icon", wt = "fontawesome-i2svg", Jr = "async", Qr = ["HTML", "HEAD", "STYLE", "SCRIPT"], Aa = ["::before", "::after", ":before", ":after"], Ia = (function() {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})();
function fe(e) {
  return new Proxy(e, {
    get: function(a, n) {
      return n in a ? a[n] : a[O];
    }
  });
}
var Pa = f({}, ea);
Pa[O] = f(f(f(f({}, {
  "fa-duotone": "duotone"
}), ea[O]), xt.kit), xt["kit-duotone"]);
var Zr = fe(Pa), Re = f({}, Gn);
Re[O] = f(f(f(f({}, {
  duotone: "fad"
}), Re[O]), St.kit), St["kit-duotone"]);
var kt = fe(Re), We = f({}, Le);
We[O] = f(f({}, We[O]), er.kit);
var ot = fe(We), Be = f({}, Br);
Be[O] = f(f({}, Be[O]), Qn.kit);
fe(Be);
var ei = wn, Oa = "fa-layers-text", ti = kn, ai = f({}, Un);
fe(ai);
var ni = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Fe = An, ri = [].concat(D(qn), D(Vr)), re = U.FontAwesomeConfig || {};
function ii(e) {
  var t = x.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function oi(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
if (x && typeof x.querySelector == "function") {
  var si = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-search-pseudo-elements-warnings", "searchPseudoElementsWarnings"], ["data-search-pseudo-elements-full-scan", "searchPseudoElementsFullScan"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  si.forEach(function(e) {
    var t = ke(e, 2), a = t[0], n = t[1], r = oi(ii(a));
    r != null && (re[n] = r);
  });
}
var Ea = {
  styleDefault: "solid",
  familyDefault: O,
  cssPrefix: wa,
  replacementClass: ka,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  searchPseudoElements: !1,
  searchPseudoElementsWarnings: !0,
  searchPseudoElementsFullScan: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
};
re.familyPrefix && (re.cssPrefix = re.familyPrefix);
var ee = f(f({}, Ea), re);
ee.autoReplaceSvg || (ee.observeMutations = !1);
var v = {};
Object.keys(Ea).forEach(function(e) {
  Object.defineProperty(v, e, {
    enumerable: !0,
    set: function(a) {
      ee[e] = a, ie.forEach(function(n) {
        return n(v);
      });
    },
    get: function() {
      return ee[e];
    }
  });
});
Object.defineProperty(v, "familyPrefix", {
  enumerable: !0,
  set: function(t) {
    ee.cssPrefix = t, ie.forEach(function(a) {
      return a(v);
    });
  },
  get: function() {
    return ee.cssPrefix;
  }
});
U.FontAwesomeConfig = v;
var ie = [];
function li(e) {
  return ie.push(e), function() {
    ie.splice(ie.indexOf(e), 1);
  };
}
var X = Me, L = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function fi(e) {
  if (!(!e || !W)) {
    var t = x.createElement("style");
    t.setAttribute("type", "text/css"), t.innerHTML = e;
    for (var a = x.head.childNodes, n = null, r = a.length - 1; r > -1; r--) {
      var i = a[r], o = (i.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(o) > -1 && (n = i);
    }
    return x.head.insertBefore(t, n), e;
  }
}
var ui = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function At() {
  for (var e = 12, t = ""; e-- > 0; )
    t += ui[Math.random() * 62 | 0];
  return t;
}
function te(e) {
  for (var t = [], a = (e || []).length >>> 0; a--; )
    t[a] = e[a];
  return t;
}
function st(e) {
  return e.classList ? te(e.classList) : (e.getAttribute("class") || "").split(" ").filter(function(t) {
    return t;
  });
}
function _a(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function ci(e) {
  return Object.keys(e || {}).reduce(function(t, a) {
    return t + "".concat(a, '="').concat(_a(e[a]), '" ');
  }, "").trim();
}
function Ae(e) {
  return Object.keys(e || {}).reduce(function(t, a) {
    return t + "".concat(a, ": ").concat(e[a].trim(), ";");
  }, "");
}
function lt(e) {
  return e.size !== L.size || e.x !== L.x || e.y !== L.y || e.rotate !== L.rotate || e.flipX || e.flipY;
}
function di(e) {
  var t = e.transform, a = e.containerWidth, n = e.iconWidth, r = {
    transform: "translate(".concat(a / 2, " 256)")
  }, i = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), o = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), s = "rotate(".concat(t.rotate, " 0 0)"), l = {
    transform: "".concat(i, " ").concat(o, " ").concat(s)
  }, u = {
    transform: "translate(".concat(n / 2 * -1, " -256)")
  };
  return {
    outer: r,
    inner: l,
    path: u
  };
}
function mi(e) {
  var t = e.transform, a = e.width, n = a === void 0 ? Me : a, r = e.height, i = r === void 0 ? Me : r, o = "";
  return Zt ? o += "translate(".concat(t.x / X - n / 2, "em, ").concat(t.y / X - i / 2, "em) ") : o += "translate(calc(-50% + ".concat(t.x / X, "em), calc(-50% + ").concat(t.y / X, "em)) "), o += "scale(".concat(t.size / X * (t.flipX ? -1 : 1), ", ").concat(t.size / X * (t.flipY ? -1 : 1), ") "), o += "rotate(".concat(t.rotate, "deg) "), o;
}
var vi = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
  --fa-font-utility-semibold: normal 600 1em/1 "Font Awesome 7 Utility";
  --fa-font-utility-duo-semibold: normal 600 1em/1 "Font Awesome 7 Utility Duo";
  --fa-font-utility-fill-semibold: normal 600 1em/1 "Font Awesome 7 Utility Fill";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;
function Ca() {
  var e = wa, t = ka, a = v.cssPrefix, n = v.replacementClass, r = vi;
  if (a !== e || n !== t) {
    var i = new RegExp("\\.".concat(e, "\\-"), "g"), o = new RegExp("\\--".concat(e, "\\-"), "g"), s = new RegExp("\\.".concat(t), "g");
    r = r.replace(i, ".".concat(a, "-")).replace(o, "--".concat(a, "-")).replace(s, ".".concat(n));
  }
  return r;
}
var It = !1;
function Ne() {
  v.autoAddCss && !It && (fi(Ca()), It = !0);
}
var hi = {
  mixout: function() {
    return {
      dom: {
        css: Ca,
        insertCss: Ne
      }
    };
  },
  hooks: function() {
    return {
      beforeDOMElementCreation: function() {
        Ne();
      },
      beforeI2svg: function() {
        Ne();
      }
    };
  }
}, z = U || {};
z[M] || (z[M] = {});
z[M].styles || (z[M].styles = {});
z[M].hooks || (z[M].hooks = {});
z[M].shims || (z[M].shims = []);
var j = z[M], Fa = [], Na = function() {
  x.removeEventListener("DOMContentLoaded", Na), ye = 1, Fa.map(function(t) {
    return t();
  });
}, ye = !1;
W && (ye = (x.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(x.readyState), ye || x.addEventListener("DOMContentLoaded", Na));
function gi(e) {
  W && (ye ? setTimeout(e, 0) : Fa.push(e));
}
function ue(e) {
  var t = e.tag, a = e.attributes, n = a === void 0 ? {} : a, r = e.children, i = r === void 0 ? [] : r;
  return typeof e == "string" ? _a(e) : "<".concat(t, " ").concat(ci(n), ">").concat(i.map(ue).join(""), "</").concat(t, ">");
}
function Pt(e, t, a) {
  if (e && e[t] && e[t][a])
    return {
      prefix: t,
      iconName: a,
      icon: e[t][a]
    };
}
var $e = function(t, a, n, r) {
  var i = Object.keys(t), o = i.length, s = a, l, u, c;
  for (n === void 0 ? (l = 1, c = t[i[0]]) : (l = 0, c = n); l < o; l++)
    u = i[l], c = s(c, t[u], u, t);
  return c;
};
function $a(e) {
  return D(e).length !== 1 ? null : e.codePointAt(0).toString(16);
}
function Ot(e) {
  return Object.keys(e).reduce(function(t, a) {
    var n = e[a], r = !!n.icon;
    return r ? t[n.iconName] = n.icon : t[a] = n, t;
  }, {});
}
function Ue(e, t) {
  var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = a.skipHooks, r = n === void 0 ? !1 : n, i = Ot(t);
  typeof j.hooks.addPack == "function" && !r ? j.hooks.addPack(e, Ot(t)) : j.styles[e] = f(f({}, j.styles[e] || {}), i), e === "fas" && Ue("fa", t);
}
var se = j.styles, pi = j.shims, ja = Object.keys(ot), yi = ja.reduce(function(e, t) {
  return e[t] = Object.keys(ot[t]), e;
}, {}), ft = null, Ta = {}, Da = {}, La = {}, Ma = {}, za = {};
function bi(e) {
  return ~ri.indexOf(e);
}
function xi(e, t) {
  var a = t.split("-"), n = a[0], r = a.slice(1).join("-");
  return n === e && r !== "" && !bi(r) ? r : null;
}
var Ra = function() {
  var t = function(i) {
    return $e(se, function(o, s, l) {
      return o[l] = $e(s, i, {}), o;
    }, {});
  };
  Ta = t(function(r, i, o) {
    if (i[3] && (r[i[3]] = o), i[2]) {
      var s = i[2].filter(function(l) {
        return typeof l == "number";
      });
      s.forEach(function(l) {
        r[l.toString(16)] = o;
      });
    }
    return r;
  }), Da = t(function(r, i, o) {
    if (r[o] = o, i[2]) {
      var s = i[2].filter(function(l) {
        return typeof l == "string";
      });
      s.forEach(function(l) {
        r[l] = o;
      });
    }
    return r;
  }), za = t(function(r, i, o) {
    var s = i[2];
    return r[o] = o, s.forEach(function(l) {
      r[l] = o;
    }), r;
  });
  var a = "far" in se || v.autoFetchSvg, n = $e(pi, function(r, i) {
    var o = i[0], s = i[1], l = i[2];
    return s === "far" && !a && (s = "fas"), typeof o == "string" && (r.names[o] = {
      prefix: s,
      iconName: l
    }), typeof o == "number" && (r.unicodes[o.toString(16)] = {
      prefix: s,
      iconName: l
    }), r;
  }, {
    names: {},
    unicodes: {}
  });
  La = n.names, Ma = n.unicodes, ft = Ie(v.styleDefault, {
    family: v.familyDefault
  });
};
li(function(e) {
  ft = Ie(e.styleDefault, {
    family: v.familyDefault
  });
});
Ra();
function ut(e, t) {
  return (Ta[e] || {})[t];
}
function Si(e, t) {
  return (Da[e] || {})[t];
}
function G(e, t) {
  return (za[e] || {})[t];
}
function Wa(e) {
  return La[e] || {
    prefix: null,
    iconName: null
  };
}
function wi(e) {
  var t = Ma[e], a = ut("fas", e);
  return t || (a ? {
    prefix: "fas",
    iconName: a
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function Y() {
  return ft;
}
var Ba = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function ki(e) {
  var t = O, a = ja.reduce(function(n, r) {
    return n[r] = "".concat(v.cssPrefix, "-").concat(r), n;
  }, {});
  return ya.forEach(function(n) {
    (e.includes(a[n]) || e.some(function(r) {
      return yi[n].includes(r);
    })) && (t = n);
  }), t;
}
function Ie(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = t.family, n = a === void 0 ? O : a, r = Zr[n][e];
  if (n === le && !e)
    return "fad";
  var i = kt[n][e] || kt[n][r], o = e in j.styles ? e : null, s = i || o || null;
  return s;
}
function Ai(e) {
  var t = [], a = null;
  return e.forEach(function(n) {
    var r = xi(v.cssPrefix, n);
    r ? a = r : n && t.push(n);
  }), {
    iconName: a,
    rest: t
  };
}
function Et(e) {
  return e.sort().filter(function(t, a, n) {
    return n.indexOf(t) === a;
  });
}
var _t = xa.concat(ba);
function Pe(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = t.skipLookups, n = a === void 0 ? !1 : a, r = null, i = Et(e.filter(function(p) {
    return _t.includes(p);
  })), o = Et(e.filter(function(p) {
    return !_t.includes(p);
  })), s = i.filter(function(p) {
    return r = p, !ta.includes(p);
  }), l = ke(s, 1), u = l[0], c = u === void 0 ? null : u, m = ki(i), y = f(f({}, Ai(o)), {}, {
    prefix: Ie(c, {
      family: m
    })
  });
  return f(f(f({}, y), Ei({
    values: e,
    family: m,
    styles: se,
    config: v,
    canonical: y,
    givenPrefix: r
  })), Ii(n, r, y));
}
function Ii(e, t, a) {
  var n = a.prefix, r = a.iconName;
  if (e || !n || !r)
    return {
      prefix: n,
      iconName: r
    };
  var i = t === "fa" ? Wa(r) : {}, o = G(n, r);
  return r = i.iconName || o || r, n = i.prefix || n, n === "far" && !se.far && se.fas && !v.autoFetchSvg && (n = "fas"), {
    prefix: n,
    iconName: r
  };
}
var Pi = ya.filter(function(e) {
  return e !== O || e !== le;
}), Oi = Object.keys(Le).filter(function(e) {
  return e !== O;
}).map(function(e) {
  return Object.keys(Le[e]);
}).flat();
function Ei(e) {
  var t = e.values, a = e.family, n = e.canonical, r = e.givenPrefix, i = r === void 0 ? "" : r, o = e.styles, s = o === void 0 ? {} : o, l = e.config, u = l === void 0 ? {} : l, c = a === le, m = t.includes("fa-duotone") || t.includes("fad"), y = u.familyDefault === "duotone", p = n.prefix === "fad" || n.prefix === "fa-duotone";
  if (!c && (m || y || p) && (n.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (n.prefix = "fab"), !n.prefix && Pi.includes(a)) {
    var A = Object.keys(s).find(function(I) {
      return Oi.includes(I);
    });
    if (A || u.autoFetchSvg) {
      var b = Hn.get(a).defaultShortPrefixId;
      n.prefix = b, n.iconName = G(n.prefix, n.iconName) || n.iconName;
    }
  }
  return (n.prefix === "fa" || i === "fa") && (n.prefix = Y() || "fas"), n;
}
var _i = /* @__PURE__ */ (function() {
  function e() {
    mn(this, e), this.definitions = {};
  }
  return hn(e, [{
    key: "add",
    value: function() {
      for (var a = this, n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      var o = r.reduce(this._pullDefinitions, {});
      Object.keys(o).forEach(function(s) {
        a.definitions[s] = f(f({}, a.definitions[s] || {}), o[s]), Ue(s, o[s]);
        var l = ot[O][s];
        l && Ue(l, o[s]), Ra();
      });
    }
  }, {
    key: "reset",
    value: function() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function(a, n) {
      var r = n.prefix && n.iconName && n.icon ? {
        0: n
      } : n;
      return Object.keys(r).map(function(i) {
        var o = r[i], s = o.prefix, l = o.iconName, u = o.icon, c = u[2];
        a[s] || (a[s] = {}), c.length > 0 && c.forEach(function(m) {
          typeof m == "string" && (a[s][m] = u);
        }), a[s][l] = u;
      }), a;
    }
  }]);
})(), Ct = [], J = {}, Q = {}, Ci = Object.keys(Q);
function Fi(e, t) {
  var a = t.mixoutsTo;
  return Ct = e, J = {}, Object.keys(Q).forEach(function(n) {
    Ci.indexOf(n) === -1 && delete Q[n];
  }), Ct.forEach(function(n) {
    var r = n.mixout ? n.mixout() : {};
    if (Object.keys(r).forEach(function(o) {
      typeof r[o] == "function" && (a[o] = r[o]), pe(r[o]) === "object" && Object.keys(r[o]).forEach(function(s) {
        a[o] || (a[o] = {}), a[o][s] = r[o][s];
      });
    }), n.hooks) {
      var i = n.hooks();
      Object.keys(i).forEach(function(o) {
        J[o] || (J[o] = []), J[o].push(i[o]);
      });
    }
    n.provides && n.provides(Q);
  }), a;
}
function Ye(e, t) {
  for (var a = arguments.length, n = new Array(a > 2 ? a - 2 : 0), r = 2; r < a; r++)
    n[r - 2] = arguments[r];
  var i = J[e] || [];
  return i.forEach(function(o) {
    t = o.apply(null, [t].concat(n));
  }), t;
}
function V(e) {
  for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    a[n - 1] = arguments[n];
  var r = J[e] || [];
  r.forEach(function(i) {
    i.apply(null, a);
  });
}
function H() {
  var e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return Q[e] ? Q[e].apply(null, t) : void 0;
}
function He(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  var t = e.iconName, a = e.prefix || Y();
  if (t)
    return t = G(a, t) || t, Pt(Ua.definitions, a, t) || Pt(j.styles, a, t);
}
var Ua = new _i(), Ni = function() {
  v.autoReplaceSvg = !1, v.observeMutations = !1, V("noAuto");
}, $i = {
  i2svg: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return W ? (V("beforeI2svg", t), H("pseudoElements2svg", t), H("i2svg", t)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = t.autoReplaceSvgRoot;
    v.autoReplaceSvg === !1 && (v.autoReplaceSvg = !0), v.observeMutations = !0, gi(function() {
      Ti({
        autoReplaceSvgRoot: a
      }), V("watch", t);
    });
  }
}, ji = {
  icon: function(t) {
    if (t === null)
      return null;
    if (pe(t) === "object" && t.prefix && t.iconName)
      return {
        prefix: t.prefix,
        iconName: G(t.prefix, t.iconName) || t.iconName
      };
    if (Array.isArray(t) && t.length === 2) {
      var a = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1], n = Ie(t[0]);
      return {
        prefix: n,
        iconName: G(n, a) || a
      };
    }
    if (typeof t == "string" && (t.indexOf("".concat(v.cssPrefix, "-")) > -1 || t.match(ei))) {
      var r = Pe(t.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: r.prefix || Y(),
        iconName: G(r.prefix, r.iconName) || r.iconName
      };
    }
    if (typeof t == "string") {
      var i = Y();
      return {
        prefix: i,
        iconName: G(i, t) || t
      };
    }
  }
}, F = {
  noAuto: Ni,
  config: v,
  dom: $i,
  parse: ji,
  library: Ua,
  findIconDefinition: He,
  toHtml: ue
}, Ti = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = t.autoReplaceSvgRoot, n = a === void 0 ? x : a;
  (Object.keys(j.styles).length > 0 || v.autoFetchSvg) && W && v.autoReplaceSvg && F.dom.i2svg({
    node: n
  });
};
function Oe(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map(function(n) {
        return ue(n);
      });
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (W) {
        var n = x.createElement("div");
        return n.innerHTML = e.html, n.children;
      }
    }
  }), e;
}
function Di(e) {
  var t = e.children, a = e.main, n = e.mask, r = e.attributes, i = e.styles, o = e.transform;
  if (lt(o) && a.found && !n.found) {
    var s = a.width, l = a.height, u = {
      x: s / l / 2,
      y: 0.5
    };
    r.style = Ae(f(f({}, i), {}, {
      "transform-origin": "".concat(u.x + o.x / 16, "em ").concat(u.y + o.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: r,
    children: t
  }];
}
function Li(e) {
  var t = e.prefix, a = e.iconName, n = e.children, r = e.attributes, i = e.symbol, o = i === !0 ? "".concat(t, "-").concat(v.cssPrefix, "-").concat(a) : i;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: f(f({}, r), {}, {
        id: o
      }),
      children: n
    }]
  }];
}
function Mi(e) {
  var t = ["aria-label", "aria-labelledby", "title", "role"];
  return t.some(function(a) {
    return a in e;
  });
}
function ct(e) {
  var t = e.icons, a = t.main, n = t.mask, r = e.prefix, i = e.iconName, o = e.transform, s = e.symbol, l = e.maskId, u = e.extra, c = e.watchable, m = c === void 0 ? !1 : c, y = n.found ? n : a, p = y.width, A = y.height, b = [v.replacementClass, i ? "".concat(v.cssPrefix, "-").concat(i) : ""].filter(function(C) {
    return u.classes.indexOf(C) === -1;
  }).filter(function(C) {
    return C !== "" || !!C;
  }).concat(u.classes).join(" "), I = {
    children: [],
    attributes: f(f({}, u.attributes), {}, {
      "data-prefix": r,
      "data-icon": i,
      class: b,
      role: u.attributes.role || "img",
      viewBox: "0 0 ".concat(p, " ").concat(A)
    })
  };
  !Mi(u.attributes) && !u.attributes["aria-hidden"] && (I.attributes["aria-hidden"] = "true"), m && (I.attributes[q] = "");
  var d = f(f({}, I), {}, {
    prefix: r,
    iconName: i,
    main: a,
    mask: n,
    maskId: l,
    transform: o,
    symbol: s,
    styles: f({}, u.styles)
  }), h = n.found && a.found ? H("generateAbstractMask", d) || {
    children: [],
    attributes: {}
  } : H("generateAbstractIcon", d) || {
    children: [],
    attributes: {}
  }, S = h.children, E = h.attributes;
  return d.children = S, d.attributes = E, s ? Li(d) : Di(d);
}
function Ft(e) {
  var t = e.content, a = e.width, n = e.height, r = e.transform, i = e.extra, o = e.watchable, s = o === void 0 ? !1 : o, l = f(f({}, i.attributes), {}, {
    class: i.classes.join(" ")
  });
  s && (l[q] = "");
  var u = f({}, i.styles);
  lt(r) && (u.transform = mi({
    transform: r,
    width: a,
    height: n
  }), u["-webkit-transform"] = u.transform);
  var c = Ae(u);
  c.length > 0 && (l.style = c);
  var m = [];
  return m.push({
    tag: "span",
    attributes: l,
    children: [t]
  }), m;
}
function zi(e) {
  var t = e.content, a = e.extra, n = f(f({}, a.attributes), {}, {
    class: a.classes.join(" ")
  }), r = Ae(a.styles);
  r.length > 0 && (n.style = r);
  var i = [];
  return i.push({
    tag: "span",
    attributes: n,
    children: [t]
  }), i;
}
var je = j.styles;
function Ge(e) {
  var t = e[0], a = e[1], n = e.slice(4), r = ke(n, 1), i = r[0], o = null;
  return Array.isArray(i) ? o = {
    tag: "g",
    attributes: {
      class: "".concat(v.cssPrefix, "-").concat(Fe.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(v.cssPrefix, "-").concat(Fe.SECONDARY),
        fill: "currentColor",
        d: i[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(v.cssPrefix, "-").concat(Fe.PRIMARY),
        fill: "currentColor",
        d: i[1]
      }
    }]
  } : o = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: i
    }
  }, {
    found: !0,
    width: t,
    height: a,
    icon: o
  };
}
var Ri = {
  found: !1,
  width: 512,
  height: 512
};
function Wi(e, t) {
  !Ia && !v.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function qe(e, t) {
  var a = t;
  return t === "fa" && v.styleDefault !== null && (t = Y()), new Promise(function(n, r) {
    if (a === "fa") {
      var i = Wa(e) || {};
      e = i.iconName || e, t = i.prefix || t;
    }
    if (e && t && je[t] && je[t][e]) {
      var o = je[t][e];
      return n(Ge(o));
    }
    Wi(e, t), n(f(f({}, Ri), {}, {
      icon: v.showMissingIcons && e ? H("missingIconAbstract") || {} : {}
    }));
  });
}
var Nt = function() {
}, Ve = v.measurePerformance && ce && ce.mark && ce.measure ? ce : {
  mark: Nt,
  measure: Nt
}, ne = 'FA "7.1.0"', Bi = function(t) {
  return Ve.mark("".concat(ne, " ").concat(t, " begins")), function() {
    return Ya(t);
  };
}, Ya = function(t) {
  Ve.mark("".concat(ne, " ").concat(t, " ends")), Ve.measure("".concat(ne, " ").concat(t), "".concat(ne, " ").concat(t, " begins"), "".concat(ne, " ").concat(t, " ends"));
}, dt = {
  begin: Bi,
  end: Ya
}, ve = function() {
};
function $t(e) {
  var t = e.getAttribute ? e.getAttribute(q) : null;
  return typeof t == "string";
}
function Ui(e) {
  var t = e.getAttribute ? e.getAttribute(rt) : null, a = e.getAttribute ? e.getAttribute(it) : null;
  return t && a;
}
function Yi(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(v.replacementClass);
}
function Hi() {
  if (v.autoReplaceSvg === !0)
    return he.replace;
  var e = he[v.autoReplaceSvg];
  return e || he.replace;
}
function Gi(e) {
  return x.createElementNS("http://www.w3.org/2000/svg", e);
}
function qi(e) {
  return x.createElement(e);
}
function Ha(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = t.ceFn, n = a === void 0 ? e.tag === "svg" ? Gi : qi : a;
  if (typeof e == "string")
    return x.createTextNode(e);
  var r = n(e.tag);
  Object.keys(e.attributes || []).forEach(function(o) {
    r.setAttribute(o, e.attributes[o]);
  });
  var i = e.children || [];
  return i.forEach(function(o) {
    r.appendChild(Ha(o, {
      ceFn: n
    }));
  }), r;
}
function Vi(e) {
  var t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
var he = {
  replace: function(t) {
    var a = t[0];
    if (a.parentNode)
      if (t[1].forEach(function(r) {
        a.parentNode.insertBefore(Ha(r), a);
      }), a.getAttribute(q) === null && v.keepOriginalSource) {
        var n = x.createComment(Vi(a));
        a.parentNode.replaceChild(n, a);
      } else
        a.remove();
  },
  nest: function(t) {
    var a = t[0], n = t[1];
    if (~st(a).indexOf(v.replacementClass))
      return he.replace(t);
    var r = new RegExp("".concat(v.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      var i = n[0].attributes.class.split(" ").reduce(function(s, l) {
        return l === v.replacementClass || l.match(r) ? s.toSvg.push(l) : s.toNode.push(l), s;
      }, {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = i.toSvg.join(" "), i.toNode.length === 0 ? a.removeAttribute("class") : a.setAttribute("class", i.toNode.join(" "));
    }
    var o = n.map(function(s) {
      return ue(s);
    }).join(`
`);
    a.setAttribute(q, ""), a.innerHTML = o;
  }
};
function jt(e) {
  e();
}
function Ga(e, t) {
  var a = typeof t == "function" ? t : ve;
  if (e.length === 0)
    a();
  else {
    var n = jt;
    v.mutateApproach === Jr && (n = U.requestAnimationFrame || jt), n(function() {
      var r = Hi(), i = dt.begin("mutate");
      e.map(r), i(), a();
    });
  }
}
var mt = !1;
function qa() {
  mt = !0;
}
function Ke() {
  mt = !1;
}
var be = null;
function Tt(e) {
  if (bt && v.observeMutations) {
    var t = e.treeCallback, a = t === void 0 ? ve : t, n = e.nodeCallback, r = n === void 0 ? ve : n, i = e.pseudoElementsCallback, o = i === void 0 ? ve : i, s = e.observeMutationsRoot, l = s === void 0 ? x : s;
    be = new bt(function(u) {
      if (!mt) {
        var c = Y();
        te(u).forEach(function(m) {
          if (m.type === "childList" && m.addedNodes.length > 0 && !$t(m.addedNodes[0]) && (v.searchPseudoElements && o(m.target), a(m.target)), m.type === "attributes" && m.target.parentNode && v.searchPseudoElements && o([m.target], !0), m.type === "attributes" && $t(m.target) && ~ni.indexOf(m.attributeName))
            if (m.attributeName === "class" && Ui(m.target)) {
              var y = Pe(st(m.target)), p = y.prefix, A = y.iconName;
              m.target.setAttribute(rt, p || c), A && m.target.setAttribute(it, A);
            } else Yi(m.target) && r(m.target);
        });
      }
    }), W && be.observe(l, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    });
  }
}
function Ki() {
  be && be.disconnect();
}
function Xi(e) {
  var t = e.getAttribute("style"), a = [];
  return t && (a = t.split(";").reduce(function(n, r) {
    var i = r.split(":"), o = i[0], s = i.slice(1);
    return o && s.length > 0 && (n[o] = s.join(":").trim()), n;
  }, {})), a;
}
function Ji(e) {
  var t = e.getAttribute("data-prefix"), a = e.getAttribute("data-icon"), n = e.innerText !== void 0 ? e.innerText.trim() : "", r = Pe(st(e));
  return r.prefix || (r.prefix = Y()), t && a && (r.prefix = t, r.iconName = a), r.iconName && r.prefix || (r.prefix && n.length > 0 && (r.iconName = Si(r.prefix, e.innerText) || ut(r.prefix, $a(e.innerText))), !r.iconName && v.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (r.iconName = e.firstChild.data)), r;
}
function Qi(e) {
  var t = te(e.attributes).reduce(function(a, n) {
    return a.name !== "class" && a.name !== "style" && (a[n.name] = n.value), a;
  }, {});
  return t;
}
function Zi() {
  return {
    iconName: null,
    prefix: null,
    transform: L,
    symbol: !1,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function Dt(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  }, a = Ji(e), n = a.iconName, r = a.prefix, i = a.rest, o = Qi(e), s = Ye("parseNodeAttributes", {}, e), l = t.styleParser ? Xi(e) : [];
  return f({
    iconName: n,
    prefix: r,
    transform: L,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: i,
      styles: l,
      attributes: o
    }
  }, s);
}
var eo = j.styles;
function Va(e) {
  var t = v.autoReplaceSvg === "nest" ? Dt(e, {
    styleParser: !1
  }) : Dt(e);
  return ~t.extra.classes.indexOf(Oa) ? H("generateLayersText", e, t) : H("generateSvgReplacementMutation", e, t);
}
function to() {
  return [].concat(D(ba), D(xa));
}
function Lt(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!W) return Promise.resolve();
  var a = x.documentElement.classList, n = function(m) {
    return a.add("".concat(wt, "-").concat(m));
  }, r = function(m) {
    return a.remove("".concat(wt, "-").concat(m));
  }, i = v.autoFetchSvg ? to() : ta.concat(Object.keys(eo));
  i.includes("fa") || i.push("fa");
  var o = [".".concat(Oa, ":not([").concat(q, "])")].concat(i.map(function(c) {
    return ".".concat(c, ":not([").concat(q, "])");
  })).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  var s = [];
  try {
    s = te(e.querySelectorAll(o));
  } catch {
  }
  if (s.length > 0)
    n("pending"), r("complete");
  else
    return Promise.resolve();
  var l = dt.begin("onTree"), u = s.reduce(function(c, m) {
    try {
      var y = Va(m);
      y && c.push(y);
    } catch (p) {
      Ia || p.name === "MissingIcon" && console.error(p);
    }
    return c;
  }, []);
  return new Promise(function(c, m) {
    Promise.all(u).then(function(y) {
      Ga(y, function() {
        n("active"), n("complete"), r("pending"), typeof t == "function" && t(), l(), c();
      });
    }).catch(function(y) {
      l(), m(y);
    });
  });
}
function ao(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Va(e).then(function(a) {
    a && Ga([a], t);
  });
}
function no(e) {
  return function(t) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = (t || {}).icon ? t : He(t || {}), r = a.mask;
    return r && (r = (r || {}).icon ? r : He(r || {})), e(n, f(f({}, a), {}, {
      mask: r
    }));
  };
}
var ro = function(t) {
  var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = a.transform, r = n === void 0 ? L : n, i = a.symbol, o = i === void 0 ? !1 : i, s = a.mask, l = s === void 0 ? null : s, u = a.maskId, c = u === void 0 ? null : u, m = a.classes, y = m === void 0 ? [] : m, p = a.attributes, A = p === void 0 ? {} : p, b = a.styles, I = b === void 0 ? {} : b;
  if (t) {
    var d = t.prefix, h = t.iconName, S = t.icon;
    return Oe(f({
      type: "icon"
    }, t), function() {
      return V("beforeDOMElementCreation", {
        iconDefinition: t,
        params: a
      }), ct({
        icons: {
          main: Ge(S),
          mask: l ? Ge(l.icon) : {
            found: !1,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: d,
        iconName: h,
        transform: f(f({}, L), r),
        symbol: o,
        maskId: c,
        extra: {
          attributes: A,
          styles: I,
          classes: y
        }
      });
    });
  }
}, io = {
  mixout: function() {
    return {
      icon: no(ro)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(a) {
        return a.treeCallback = Lt, a.nodeCallback = ao, a;
      }
    };
  },
  provides: function(t) {
    t.i2svg = function(a) {
      var n = a.node, r = n === void 0 ? x : n, i = a.callback, o = i === void 0 ? function() {
      } : i;
      return Lt(r, o);
    }, t.generateSvgReplacementMutation = function(a, n) {
      var r = n.iconName, i = n.prefix, o = n.transform, s = n.symbol, l = n.mask, u = n.maskId, c = n.extra;
      return new Promise(function(m, y) {
        Promise.all([qe(r, i), l.iconName ? qe(l.iconName, l.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(p) {
          var A = ke(p, 2), b = A[0], I = A[1];
          m([a, ct({
            icons: {
              main: b,
              mask: I
            },
            prefix: i,
            iconName: r,
            transform: o,
            symbol: s,
            maskId: u,
            extra: c,
            watchable: !0
          })]);
        }).catch(y);
      });
    }, t.generateAbstractIcon = function(a) {
      var n = a.children, r = a.attributes, i = a.main, o = a.transform, s = a.styles, l = Ae(s);
      l.length > 0 && (r.style = l);
      var u;
      return lt(o) && (u = H("generateAbstractTransformGrouping", {
        main: i,
        transform: o,
        containerWidth: i.width,
        iconWidth: i.width
      })), n.push(u || i.icon), {
        children: n,
        attributes: r
      };
    };
  }
}, oo = {
  mixout: function() {
    return {
      layer: function(a) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.classes, i = r === void 0 ? [] : r;
        return Oe({
          type: "layer"
        }, function() {
          V("beforeDOMElementCreation", {
            assembler: a,
            params: n
          });
          var o = [];
          return a(function(s) {
            Array.isArray(s) ? s.map(function(l) {
              o = o.concat(l.abstract);
            }) : o = o.concat(s.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(v.cssPrefix, "-layers")].concat(D(i)).join(" ")
            },
            children: o
          }];
        });
      }
    };
  }
}, so = {
  mixout: function() {
    return {
      counter: function(a) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        n.title;
        var r = n.classes, i = r === void 0 ? [] : r, o = n.attributes, s = o === void 0 ? {} : o, l = n.styles, u = l === void 0 ? {} : l;
        return Oe({
          type: "counter",
          content: a
        }, function() {
          return V("beforeDOMElementCreation", {
            content: a,
            params: n
          }), zi({
            content: a.toString(),
            extra: {
              attributes: s,
              styles: u,
              classes: ["".concat(v.cssPrefix, "-layers-counter")].concat(D(i))
            }
          });
        });
      }
    };
  }
}, lo = {
  mixout: function() {
    return {
      text: function(a) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.transform, i = r === void 0 ? L : r, o = n.classes, s = o === void 0 ? [] : o, l = n.attributes, u = l === void 0 ? {} : l, c = n.styles, m = c === void 0 ? {} : c;
        return Oe({
          type: "text",
          content: a
        }, function() {
          return V("beforeDOMElementCreation", {
            content: a,
            params: n
          }), Ft({
            content: a,
            transform: f(f({}, L), i),
            extra: {
              attributes: u,
              styles: m,
              classes: ["".concat(v.cssPrefix, "-layers-text")].concat(D(s))
            }
          });
        });
      }
    };
  },
  provides: function(t) {
    t.generateLayersText = function(a, n) {
      var r = n.transform, i = n.extra, o = null, s = null;
      if (Zt) {
        var l = parseInt(getComputedStyle(a).fontSize, 10), u = a.getBoundingClientRect();
        o = u.width / l, s = u.height / l;
      }
      return Promise.resolve([a, Ft({
        content: a.innerHTML,
        width: o,
        height: s,
        transform: r,
        extra: i,
        watchable: !0
      })]);
    };
  }
}, Ka = new RegExp('"', "ug"), Mt = [1105920, 1112319], zt = f(f(f(f({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), Yn), Kr), Zn), Xe = Object.keys(zt).reduce(function(e, t) {
  return e[t.toLowerCase()] = zt[t], e;
}, {}), fo = Object.keys(Xe).reduce(function(e, t) {
  var a = Xe[t];
  return e[t] = a[900] || D(Object.entries(a))[0][1], e;
}, {});
function uo(e) {
  var t = e.replace(Ka, "");
  return $a(D(t)[0] || "");
}
function co(e) {
  var t = e.getPropertyValue("font-feature-settings").includes("ss01"), a = e.getPropertyValue("content"), n = a.replace(Ka, ""), r = n.codePointAt(0), i = r >= Mt[0] && r <= Mt[1], o = n.length === 2 ? n[0] === n[1] : !1;
  return i || o || t;
}
function mo(e, t) {
  var a = e.replace(/^['"]|['"]$/g, "").toLowerCase(), n = parseInt(t), r = isNaN(n) ? "normal" : n;
  return (Xe[a] || {})[r] || fo[a];
}
function Rt(e, t) {
  var a = "".concat(Xr).concat(t.replace(":", "-"));
  return new Promise(function(n, r) {
    if (e.getAttribute(a) !== null)
      return n();
    var i = te(e.children), o = i.filter(function(K) {
      return K.getAttribute(ze) === t;
    })[0], s = U.getComputedStyle(e, t), l = s.getPropertyValue("font-family"), u = l.match(ti), c = s.getPropertyValue("font-weight"), m = s.getPropertyValue("content");
    if (o && !u)
      return e.removeChild(o), n();
    if (u && m !== "none" && m !== "") {
      var y = s.getPropertyValue("content"), p = mo(l, c), A = uo(y), b = u[0].startsWith("FontAwesome"), I = co(s), d = ut(p, A), h = d;
      if (b) {
        var S = wi(A);
        S.iconName && S.prefix && (d = S.iconName, p = S.prefix);
      }
      if (d && !I && (!o || o.getAttribute(rt) !== p || o.getAttribute(it) !== h)) {
        e.setAttribute(a, h), o && e.removeChild(o);
        var E = Zi(), C = E.extra;
        C.attributes[ze] = t, qe(d, p).then(function(K) {
          var ae = ct(f(f({}, E), {}, {
            icons: {
              main: K,
              mask: Ba()
            },
            prefix: p,
            iconName: h,
            extra: C,
            watchable: !0
          })), Ee = x.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(Ee, e.firstChild) : e.appendChild(Ee), Ee.outerHTML = ae.map(function(en) {
            return ue(en);
          }).join(`
`), e.removeAttribute(a), n();
        }).catch(r);
      } else
        n();
    } else
      n();
  });
}
function vo(e) {
  return Promise.all([Rt(e, "::before"), Rt(e, "::after")]);
}
function ho(e) {
  return e.parentNode !== document.head && !~Qr.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(ze) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
var go = function(t) {
  return !!t && Aa.some(function(a) {
    return t.includes(a);
  });
}, po = function(t) {
  if (!t) return [];
  var a = /* @__PURE__ */ new Set(), n = t.split(/,(?![^()]*\))/).map(function(l) {
    return l.trim();
  });
  n = n.flatMap(function(l) {
    return l.includes("(") ? l : l.split(",").map(function(u) {
      return u.trim();
    });
  });
  var r = me(n), i;
  try {
    for (r.s(); !(i = r.n()).done; ) {
      var o = i.value;
      if (go(o)) {
        var s = Aa.reduce(function(l, u) {
          return l.replace(u, "");
        }, o);
        s !== "" && s !== "*" && a.add(s);
      }
    }
  } catch (l) {
    r.e(l);
  } finally {
    r.f();
  }
  return a;
};
function Wt(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  if (W) {
    var a;
    if (t)
      a = e;
    else if (v.searchPseudoElementsFullScan)
      a = e.querySelectorAll("*");
    else {
      var n = /* @__PURE__ */ new Set(), r = me(document.styleSheets), i;
      try {
        for (r.s(); !(i = r.n()).done; ) {
          var o = i.value;
          try {
            var s = me(o.cssRules), l;
            try {
              for (s.s(); !(l = s.n()).done; ) {
                var u = l.value, c = po(u.selectorText), m = me(c), y;
                try {
                  for (m.s(); !(y = m.n()).done; ) {
                    var p = y.value;
                    n.add(p);
                  }
                } catch (b) {
                  m.e(b);
                } finally {
                  m.f();
                }
              }
            } catch (b) {
              s.e(b);
            } finally {
              s.f();
            }
          } catch (b) {
            v.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href, " (").concat(b.message, `)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`));
          }
        }
      } catch (b) {
        r.e(b);
      } finally {
        r.f();
      }
      if (!n.size) return;
      var A = Array.from(n).join(", ");
      try {
        a = e.querySelectorAll(A);
      } catch {
      }
    }
    return new Promise(function(b, I) {
      var d = te(a).filter(ho).map(vo), h = dt.begin("searchPseudoElements");
      qa(), Promise.all(d).then(function() {
        h(), Ke(), b();
      }).catch(function() {
        h(), Ke(), I();
      });
    });
  }
}
var yo = {
  hooks: function() {
    return {
      mutationObserverCallbacks: function(a) {
        return a.pseudoElementsCallback = Wt, a;
      }
    };
  },
  provides: function(t) {
    t.pseudoElements2svg = function(a) {
      var n = a.node, r = n === void 0 ? x : n;
      v.searchPseudoElements && Wt(r);
    };
  }
}, Bt = !1, bo = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          qa(), Bt = !0;
        }
      }
    };
  },
  hooks: function() {
    return {
      bootstrap: function() {
        Tt(Ye("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        Ki();
      },
      watch: function(a) {
        var n = a.observeMutationsRoot;
        Bt ? Ke() : Tt(Ye("mutationObserverCallbacks", {
          observeMutationsRoot: n
        }));
      }
    };
  }
}, Ut = function(t) {
  var a = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return t.toLowerCase().split(" ").reduce(function(n, r) {
    var i = r.toLowerCase().split("-"), o = i[0], s = i.slice(1).join("-");
    if (o && s === "h")
      return n.flipX = !0, n;
    if (o && s === "v")
      return n.flipY = !0, n;
    if (s = parseFloat(s), isNaN(s))
      return n;
    switch (o) {
      case "grow":
        n.size = n.size + s;
        break;
      case "shrink":
        n.size = n.size - s;
        break;
      case "left":
        n.x = n.x - s;
        break;
      case "right":
        n.x = n.x + s;
        break;
      case "up":
        n.y = n.y - s;
        break;
      case "down":
        n.y = n.y + s;
        break;
      case "rotate":
        n.rotate = n.rotate + s;
        break;
    }
    return n;
  }, a);
}, xo = {
  mixout: function() {
    return {
      parse: {
        transform: function(a) {
          return Ut(a);
        }
      }
    };
  },
  hooks: function() {
    return {
      parseNodeAttributes: function(a, n) {
        var r = n.getAttribute("data-fa-transform");
        return r && (a.transform = Ut(r)), a;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractTransformGrouping = function(a) {
      var n = a.main, r = a.transform, i = a.containerWidth, o = a.iconWidth, s = {
        transform: "translate(".concat(i / 2, " 256)")
      }, l = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "), u = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") "), c = "rotate(".concat(r.rotate, " 0 0)"), m = {
        transform: "".concat(l, " ").concat(u, " ").concat(c)
      }, y = {
        transform: "translate(".concat(o / 2 * -1, " -256)")
      }, p = {
        outer: s,
        inner: m,
        path: y
      };
      return {
        tag: "g",
        attributes: f({}, p.outer),
        children: [{
          tag: "g",
          attributes: f({}, p.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: f(f({}, n.icon.attributes), p.path)
          }]
        }]
      };
    };
  }
}, Te = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function Yt(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function So(e) {
  return e.tag === "g" ? e.children : [e];
}
var wo = {
  hooks: function() {
    return {
      parseNodeAttributes: function(a, n) {
        var r = n.getAttribute("data-fa-mask"), i = r ? Pe(r.split(" ").map(function(o) {
          return o.trim();
        })) : Ba();
        return i.prefix || (i.prefix = Y()), a.mask = i, a.maskId = n.getAttribute("data-fa-mask-id"), a;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractMask = function(a) {
      var n = a.children, r = a.attributes, i = a.main, o = a.mask, s = a.maskId, l = a.transform, u = i.width, c = i.icon, m = o.width, y = o.icon, p = di({
        transform: l,
        containerWidth: m,
        iconWidth: u
      }), A = {
        tag: "rect",
        attributes: f(f({}, Te), {}, {
          fill: "white"
        })
      }, b = c.children ? {
        children: c.children.map(Yt)
      } : {}, I = {
        tag: "g",
        attributes: f({}, p.inner),
        children: [Yt(f({
          tag: c.tag,
          attributes: f(f({}, c.attributes), p.path)
        }, b))]
      }, d = {
        tag: "g",
        attributes: f({}, p.outer),
        children: [I]
      }, h = "mask-".concat(s || At()), S = "clip-".concat(s || At()), E = {
        tag: "mask",
        attributes: f(f({}, Te), {}, {
          id: h,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [A, d]
      }, C = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: S
          },
          children: So(y)
        }, E]
      };
      return n.push(C, {
        tag: "rect",
        attributes: f({
          fill: "currentColor",
          "clip-path": "url(#".concat(S, ")"),
          mask: "url(#".concat(h, ")")
        }, Te)
      }), {
        children: n,
        attributes: r
      };
    };
  }
}, ko = {
  provides: function(t) {
    var a = !1;
    U.matchMedia && (a = U.matchMedia("(prefers-reduced-motion: reduce)").matches), t.missingIconAbstract = function() {
      var n = [], r = {
        fill: "currentColor"
      }, i = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
        tag: "path",
        attributes: f(f({}, r), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      var o = f(f({}, i), {}, {
        attributeName: "opacity"
      }), s = {
        tag: "circle",
        attributes: f(f({}, r), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return a || s.children.push({
        tag: "animate",
        attributes: f(f({}, i), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: f(f({}, o), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), n.push(s), n.push({
        tag: "path",
        attributes: f(f({}, r), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: a ? [] : [{
          tag: "animate",
          attributes: f(f({}, o), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), a || n.push({
        tag: "path",
        attributes: f(f({}, r), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: f(f({}, o), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: n
      };
    };
  }
}, Ao = {
  hooks: function() {
    return {
      parseNodeAttributes: function(a, n) {
        var r = n.getAttribute("data-fa-symbol"), i = r === null ? !1 : r === "" ? !0 : r;
        return a.symbol = i, a;
      }
    };
  }
}, Io = [hi, io, oo, so, lo, yo, bo, xo, wo, ko, Ao];
Fi(Io, {
  mixoutsTo: F
});
F.noAuto;
var Xa = F.config;
F.library;
F.dom;
var xe = F.parse;
F.findIconDefinition;
F.toHtml;
var Po = F.icon;
F.layer;
var Oo = F.text;
F.counter;
function Je(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var a = 0, n = Array(t); a < t; a++) n[a] = e[a];
  return n;
}
function Eo(e) {
  if (Array.isArray(e)) return Je(e);
}
function _(e, t, a) {
  return (t = jo(t)) in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e;
}
function _o(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Co() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ht(e, t) {
  var a = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), a.push.apply(a, n);
  }
  return a;
}
function $(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ht(Object(a), !0).forEach(function(n) {
      _(e, n, a[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Ht(Object(a)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(a, n));
    });
  }
  return e;
}
function Fo(e, t) {
  if (e == null) return {};
  var a, n, r = No(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) a = i[n], t.indexOf(a) === -1 && {}.propertyIsEnumerable.call(e, a) && (r[a] = e[a]);
  }
  return r;
}
function No(e, t) {
  if (e == null) return {};
  var a = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    a[n] = e[n];
  }
  return a;
}
function Qe(e) {
  return Eo(e) || _o(e) || To(e) || Co();
}
function $o(e, t) {
  if (typeof e != "object" || !e) return e;
  var a = e[Symbol.toPrimitive];
  if (a !== void 0) {
    var n = a.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function jo(e) {
  var t = $o(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Se(e) {
  "@babel/helpers - typeof";
  return Se = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Se(e);
}
function To(e, t) {
  if (e) {
    if (typeof e == "string") return Je(e, t);
    var a = {}.toString.call(e).slice(8, -1);
    return a === "Object" && e.constructor && (a = e.constructor.name), a === "Map" || a === "Set" ? Array.from(e) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? Je(e, t) : void 0;
  }
}
function oe(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? _({}, e, t) : {};
}
function Do(e) {
  var t, a = (t = {
    "fa-spin": e.spin,
    "fa-pulse": e.pulse,
    // the fixedWidth property has been deprecated as of version 7.0.0
    "fa-fw": e.fixedWidth,
    "fa-border": e.border,
    "fa-li": e.listItem,
    "fa-inverse": e.inverse,
    "fa-flip": e.flip === !0,
    "fa-flip-horizontal": e.flip === "horizontal" || e.flip === "both",
    "fa-flip-vertical": e.flip === "vertical" || e.flip === "both"
  }, _(_(_(_(_(_(_(_(_(_(t, "fa-".concat(e.size), e.size !== null), "fa-rotate-".concat(e.rotation), e.rotation !== null), "fa-rotate-by", e.rotateBy), "fa-pull-".concat(e.pull), e.pull !== null), "fa-swap-opacity", e.swapOpacity), "fa-bounce", e.bounce), "fa-shake", e.shake), "fa-beat", e.beat), "fa-fade", e.fade), "fa-beat-fade", e.beatFade), _(_(_(_(t, "fa-flash", e.flash), "fa-spin-pulse", e.spinPulse), "fa-spin-reverse", e.spinReverse), "fa-width-auto", e.widthAuto));
  return Object.keys(a).map(function(n) {
    return a[n] ? n : null;
  }).filter(function(n) {
    return n;
  });
}
var Lo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ja = { exports: {} };
(function(e) {
  (function(t) {
    var a = function(d, h, S) {
      if (!u(h) || m(h) || y(h) || p(h) || l(h))
        return h;
      var E, C = 0, K = 0;
      if (c(h))
        for (E = [], K = h.length; C < K; C++)
          E.push(a(d, h[C], S));
      else {
        E = {};
        for (var ae in h)
          Object.prototype.hasOwnProperty.call(h, ae) && (E[d(ae, S)] = a(d, h[ae], S));
      }
      return E;
    }, n = function(d, h) {
      h = h || {};
      var S = h.separator || "_", E = h.split || /(?=[A-Z])/;
      return d.split(E).join(S);
    }, r = function(d) {
      return A(d) ? d : (d = d.replace(/[\-_\s]+(.)?/g, function(h, S) {
        return S ? S.toUpperCase() : "";
      }), d.substr(0, 1).toLowerCase() + d.substr(1));
    }, i = function(d) {
      var h = r(d);
      return h.substr(0, 1).toUpperCase() + h.substr(1);
    }, o = function(d, h) {
      return n(d, h).toLowerCase();
    }, s = Object.prototype.toString, l = function(d) {
      return typeof d == "function";
    }, u = function(d) {
      return d === Object(d);
    }, c = function(d) {
      return s.call(d) == "[object Array]";
    }, m = function(d) {
      return s.call(d) == "[object Date]";
    }, y = function(d) {
      return s.call(d) == "[object RegExp]";
    }, p = function(d) {
      return s.call(d) == "[object Boolean]";
    }, A = function(d) {
      return d = d - 0, d === d;
    }, b = function(d, h) {
      var S = h && "process" in h ? h.process : h;
      return typeof S != "function" ? d : function(E, C) {
        return S(E, d, C);
      };
    }, I = {
      camelize: r,
      decamelize: o,
      pascalize: i,
      depascalize: o,
      camelizeKeys: function(d, h) {
        return a(b(r, h), d);
      },
      decamelizeKeys: function(d, h) {
        return a(b(o, h), d, h);
      },
      pascalizeKeys: function(d, h) {
        return a(b(i, h), d);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    e.exports ? e.exports = I : t.humps = I;
  })(Lo);
})(Ja);
var Mo = Ja.exports, zo = ["class", "style"];
function Ro(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, a) {
    var n = a.indexOf(":"), r = Mo.camelize(a.slice(0, n)), i = a.slice(n + 1).trim();
    return t[r] = i, t;
  }, {});
}
function Wo(e) {
  return e.split(/\s+/).reduce(function(t, a) {
    return t[a] = !0, t;
  }, {});
}
function vt(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var n = (e.children || []).map(function(l) {
    return vt(l);
  }), r = Object.keys(e.attributes || {}).reduce(function(l, u) {
    var c = e.attributes[u];
    switch (u) {
      case "class":
        l.class = Wo(c);
        break;
      case "style":
        l.style = Ro(c);
        break;
      default:
        l.attrs[u] = c;
    }
    return l;
  }, {
    attrs: {},
    class: {},
    style: {}
  });
  a.class;
  var i = a.style, o = i === void 0 ? {} : i, s = Fo(a, zo);
  return Vt(e.tag, $($($({}, t), {}, {
    class: r.class,
    style: $($({}, r.style), o)
  }, r.attrs), s), n);
}
var Qa = !1;
try {
  Qa = process.env.NODE_ENV === "production";
} catch {
}
function Bo() {
  if (!Qa && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function Gt(e) {
  if (e && Se(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (xe.icon)
    return xe.icon(e);
  if (e === null)
    return null;
  if (Se(e) === "object" && e.prefix && e.iconName)
    return e;
  if (Array.isArray(e) && e.length === 2)
    return {
      prefix: e[0],
      iconName: e[1]
    };
  if (typeof e == "string")
    return {
      prefix: "fas",
      iconName: e
    };
}
var Uo = et({
  name: "FontAwesomeIcon",
  props: {
    border: {
      type: Boolean,
      default: !1
    },
    // the fixedWidth property has been deprecated as of version 7
    fixedWidth: {
      type: Boolean,
      default: !1
    },
    flip: {
      type: [Boolean, String],
      default: !1,
      validator: function(t) {
        return [!0, !1, "horizontal", "vertical", "both"].indexOf(t) > -1;
      }
    },
    icon: {
      type: [Object, Array, String],
      required: !0
    },
    mask: {
      type: [Object, Array, String],
      default: null
    },
    maskId: {
      type: String,
      default: null
    },
    listItem: {
      type: Boolean,
      default: !1
    },
    pull: {
      type: String,
      default: null,
      validator: function(t) {
        return ["right", "left"].indexOf(t) > -1;
      }
    },
    pulse: {
      type: Boolean,
      default: !1
    },
    rotation: {
      type: [String, Number],
      default: null,
      validator: function(t) {
        return [90, 180, 270].indexOf(Number.parseInt(t, 10)) > -1;
      }
    },
    // the rotateBy property is only supported in version 7.0.0 and later
    rotateBy: {
      type: Boolean,
      default: !1
    },
    swapOpacity: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: null,
      validator: function(t) {
        return ["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"].indexOf(t) > -1;
      }
    },
    spin: {
      type: Boolean,
      default: !1
    },
    transform: {
      type: [String, Object],
      default: null
    },
    symbol: {
      type: [Boolean, String],
      default: !1
    },
    title: {
      type: String,
      default: null
    },
    titleId: {
      type: String,
      default: null
    },
    inverse: {
      type: Boolean,
      default: !1
    },
    bounce: {
      type: Boolean,
      default: !1
    },
    shake: {
      type: Boolean,
      default: !1
    },
    beat: {
      type: Boolean,
      default: !1
    },
    fade: {
      type: Boolean,
      default: !1
    },
    beatFade: {
      type: Boolean,
      default: !1
    },
    flash: {
      type: Boolean,
      default: !1
    },
    spinPulse: {
      type: Boolean,
      default: !1
    },
    spinReverse: {
      type: Boolean,
      default: !1
    },
    // the widthAuto property is only supported in version 7.0.0 and later
    widthAuto: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(t, a) {
    var n = a.attrs, r = N(function() {
      return Gt(t.icon);
    }), i = N(function() {
      return oe("classes", Do(t));
    }), o = N(function() {
      return oe("transform", typeof t.transform == "string" ? xe.transform(t.transform) : t.transform);
    }), s = N(function() {
      return oe("mask", Gt(t.mask));
    }), l = N(function() {
      var c = $($($($({}, i.value), o.value), s.value), {}, {
        symbol: t.symbol,
        maskId: t.maskId
      });
      return c.title = t.title, c.titleId = t.titleId, Po(r.value, c);
    });
    an(l, function(c) {
      if (!c)
        return Bo("Could not find one or more icon(s)", r.value, s.value);
    }, {
      immediate: !0
    });
    var u = N(function() {
      return l.value ? vt(l.value.abstract[0], {}, n) : null;
    });
    return function() {
      return u.value;
    };
  }
});
et({
  name: "FontAwesomeLayers",
  props: {
    fixedWidth: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(t, a) {
    var n = a.slots, r = Xa.familyPrefix, i = N(function() {
      return ["".concat(r, "-layers")].concat(Qe(t.fixedWidth ? ["".concat(r, "-fw")] : []));
    });
    return function() {
      return Vt("div", {
        class: i.value
      }, n.default ? n.default() : []);
    };
  }
});
et({
  name: "FontAwesomeLayersText",
  props: {
    value: {
      type: [String, Number],
      default: ""
    },
    transform: {
      type: [String, Object],
      default: null
    },
    counter: {
      type: Boolean,
      default: !1
    },
    position: {
      type: String,
      default: null,
      validator: function(t) {
        return ["bottom-left", "bottom-right", "top-left", "top-right"].indexOf(t) > -1;
      }
    }
  },
  setup: function(t, a) {
    var n = a.attrs, r = Xa.familyPrefix, i = N(function() {
      return oe("classes", [].concat(Qe(t.counter ? ["".concat(r, "-layers-counter")] : []), Qe(t.position ? ["".concat(r, "-layers-").concat(t.position)] : [])));
    }), o = N(function() {
      return oe("transform", typeof t.transform == "string" ? xe.transform(t.transform) : t.transform);
    }), s = N(function() {
      var u = Oo(t.value.toString(), $($({}, o.value), i.value)), c = u.abstract;
      return t.counter && (c[0].attributes.class = c[0].attributes.class.replace("fa-layers-text", "")), c[0];
    }), l = N(function() {
      return vt(s.value, {}, n);
    });
    return function() {
      return l.value;
    };
  }
});
const Yo = ["disabled"], Ho = { key: 0 }, Go = { key: 1 }, qo = {
  __name: "Button",
  props: {
    label: {
      type: String,
      default: "Button"
    },
    color: {
      type: String,
      default: "primary"
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    rounded: {
      type: Boolean,
      required: !1
    },
    outlined: {
      type: Boolean,
      required: !1
    },
    icon: {
      type: String,
      required: !1
    },
    size: {
      type: String,
      default: "normal"
    }
  },
  setup(e) {
    return (t, a) => (k(), w("button", {
      class: ge(["btn", `btn_${e.color}`, { btn_rounded: e.rounded }, { btn_outlined: e.outlined }, { btn_icon: e.icon }, `btn_${e.size}`]),
      disabled: e.disabled
    }, [
      e.icon ? (k(), w("span", Ho, [
        tt(nn(Uo), {
          icon: `fa-regular fa-${e.icon}`
        }, null, 8, ["icon"])
      ])) : (k(), w("span", Go, T(e.label), 1))
    ], 10, Yo));
  }
}, Vo = /* @__PURE__ */ R(qo, [["__scopeId", "data-v-e9b378bc"]]), Ko = ["name", "id", "value", "checked", "disabled"], Xo = ["for"], Jo = ["for"], Qo = {
  __name: "Checkbox",
  props: {
    name: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    checked: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    group: {
      type: Boolean,
      default: !1
    },
    type: {
      type: String,
      default: "checkbox"
    }
  },
  emits: ["update:checked", "updateCheckboxGroup"],
  setup(e, { emit: t }) {
    const a = t, n = e, r = (i) => {
      n.group ? a("updateCheckboxGroup", { optionId: n.id, checked: i.target.checked }) : a("update:checked", i.target.checked);
    };
    return (i, o) => (k(), w("div", {
      class: ge([{ "switch-container": e.type === "switch" }])
    }, [
      P("input", {
        class: ge([{ checkbox: e.type === "checkbox" }, { switch: e.type === "switch" }]),
        type: "checkbox",
        name: e.name,
        id: e.id,
        value: e.value,
        checked: e.checked,
        disabled: e.disabled,
        onInput: o[0] || (o[0] = (s) => r(s))
      }, null, 42, Ko),
      P("label", { for: e.id }, T(e.label), 9, Xo),
      e.type === "switch" ? (k(), w("label", {
        key: 0,
        for: e.id,
        class: "switch__label"
      }, T(e.label), 9, Jo)) : qt("", !0)
    ], 2));
  }
}, Za = /* @__PURE__ */ R(Qo, [["__scopeId", "data-v-53367525"]]), Zo = {
  __name: "CheckboxGroup",
  props: {
    value: {
      type: Array,
      required: !0
    },
    name: {
      type: String,
      required: !0
    },
    options: {
      type: Array,
      required: !0,
      validator: (e) => {
        const t = e.every((n) => Object.keys(n).includes("name")), a = e.every((n) => Object.keys(n).includes("id"));
        return t && a;
      }
    }
  },
  emits: ["update:value"],
  setup(e, { emit: t }) {
    const a = t, n = e, r = (i) => {
      let o = [...n.value];
      console.log(i), i.checked ? o.push(i.optionId) : o.splice(o.indexOf(i.optionId), 1), console.log(o), a("update:value", o);
    };
    return (i, o) => (k(!0), w(Z, null, we(e.options, (s) => (k(), w("div", {
      key: s.id
    }, [
      tt(Za, {
        label: s.name,
        id: s.id,
        name: e.name,
        value: s.name,
        checked: e.value.includes(s.id),
        group: "",
        onUpdateCheckboxGroup: r
      }, null, 8, ["label", "id", "name", "value", "checked"])
    ]))), 128));
  }
}, es = ["type", "name", "id", "placeholder", "value", "label"], ts = ["for"], as = { class: "form-error__message" }, ns = {
  __name: "Input",
  props: {
    error: {
      type: Array,
      required: !1
    },
    value: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      required: !0
    },
    type: {
      type: String,
      default: "text"
    },
    label: {
      type: String,
      required: !0
    },
    width: {
      type: String,
      default: "300px"
    },
    placeholder: {
      type: String,
      default: ""
    }
  },
  emits: ["update:value"],
  setup(e, { emit: t }) {
    const a = t, n = (r) => {
      a("update:value", r.target.value);
    };
    return (r, i) => (k(), w("div", {
      class: "form-input",
      style: B({ width: e.width })
    }, [
      P("input", {
        class: "input-text",
        type: e.type,
        name: e.name,
        id: e.name,
        placeholder: e.placeholder,
        value: e.value,
        label: e.label,
        onInput: n
      }, null, 40, es),
      P("label", {
        for: e.name,
        class: "input-label"
      }, T(e.label), 9, ts),
      tt(rn, null, {
        default: on(() => [
          (k(!0), w(Z, null, we(e.error, (o) => (k(), w("div", {
            class: "form-error",
            key: o.$uid
          }, [
            P("div", as, T(o.$message), 1)
          ]))), 128))
        ]),
        _: 1
      })
    ], 4));
  }
}, rs = /* @__PURE__ */ R(ns, [["__scopeId", "data-v-4433ef87"]]), is = {
  __name: "ProgressBar",
  props: {
    maxWidth: {
      type: String,
      default: "300px"
    },
    percent: {
      type: Number,
      required: !0
    },
    color: {
      type: String,
      default: "primary"
    }
  },
  setup(e) {
    return (t, a) => (k(), w("div", {
      class: "progress-container",
      style: B([{ "max-width": e.maxWidth }])
    }, [
      P("span", {
        class: "progress-percent",
        style: B({ color: `var(--${e.color})` })
      }, T(e.percent) + "%", 5),
      P("div", {
        class: "progress",
        style: B({ background: `var(--${e.color}-hover)` })
      }, [
        P("div", {
          class: "progress-bar",
          style: B([{ width: `${e.percent}%` }, { background: `var(--${e.color})` }])
        }, null, 4)
      ], 4)
    ], 4));
  }
}, os = /* @__PURE__ */ R(is, [["__scopeId", "data-v-6b4ad0e8"]]), ss = { class: "progress-circle" }, ls = {
  width: "120",
  height: "120",
  viewBox: "0 0 120 120",
  class: "progress-circle-svg"
}, fs = ["stroke"], us = ["stroke"], cs = {
  __name: "ProgressCircle",
  props: {
    percent: {
      type: Number,
      required: !0
    },
    color: {
      type: String,
      default: "primary"
    }
  },
  setup(e) {
    return (t, a) => (k(), w("div", ss, [
      P("span", {
        class: "progress-circle-percent",
        style: B([{ color: `var(--${e.color})` }])
      }, T(e.percent) + "%", 5),
      (k(), w("svg", ls, [
        P("circle", {
          cx: "60",
          cy: "60",
          r: "54",
          fill: "none",
          stroke: `var(--${e.color}-hover)`,
          "stroke-width": "12"
        }, null, 8, fs),
        P("circle", {
          class: "progress-circle-line",
          style: B([{ "stroke-dashoffset": `calc(100 - ${e.percent})` }]),
          cx: "60",
          cy: "60",
          r: "54",
          fill: "none",
          stroke: `var(--${e.color})`,
          "stroke-width": "12",
          pathLength: "100"
        }, null, 12, us)
      ]))
    ]));
  }
}, ds = /* @__PURE__ */ R(cs, [["__scopeId", "data-v-6e50d1c8"]]), ms = ["name", "id", "value", "checked", "disabled"], vs = ["for"], hs = {
  __name: "Radiobutton",
  props: {
    name: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    checked: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    group: {
      type: Boolean,
      default: !1
    },
    checkedValue: {
      type: [String, Number, Boolean],
      default: ""
    }
  },
  emits: ["update:checkedValue"],
  setup(e, { emit: t }) {
    const a = t, n = (r) => {
      a("update:checkedValue", r.target.value);
    };
    return (r, i) => (k(), w(Z, null, [
      P("input", {
        class: "radiobutton",
        type: "radio",
        name: e.name,
        id: e.id,
        value: e.value,
        checked: e.checked,
        disabled: e.disabled,
        onInput: i[0] || (i[0] = (o) => n(o))
      }, null, 40, ms),
      P("label", { for: e.id }, T(e.label), 9, vs)
    ], 64));
  }
}, gs = /* @__PURE__ */ R(hs, [["__scopeId", "data-v-bd3d3168"]]), ps = { class: "table-wrapper" }, ys = { class: "table" }, bs = ["onClick"], xs = {
  __name: "BaseTable",
  props: {
    head: {
      type: Array,
      required: !1
    },
    columnTemplates: {
      type: String,
      required: !1
    }
  },
  emits: ["sorting"],
  setup(e, { emit: t }) {
    const a = t, n = (r) => {
      a("sorting", r.toLowerCase());
    };
    return (r, i) => (k(), w("div", ps, [
      P("div", ys, [
        P("div", {
          class: "table-head",
          style: B({ "grid-template-columns": e.columnTemplates })
        }, [
          (k(!0), w(Z, null, we(e.head, (o, s) => (k(), w("div", {
            class: "table-head__name",
            key: s,
            onClick: (l) => n(o)
          }, T(o), 9, bs))), 128))
        ], 4),
        Ze(r.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}, Ss = /* @__PURE__ */ R(xs, [["__scopeId", "data-v-e730b882"]]), ws = { class: "tab-nav" }, ks = ["onClick"], As = { class: "tab-content" }, Is = {
  __name: "Tabs",
  props: {
    names: {
      type: Array,
      required: !0
    },
    selectedTab: {
      type: String,
      required: !1
    }
  },
  emits: ["changeTab"],
  setup(e, { emit: t }) {
    const a = t;
    return (n, r) => (k(), w(Z, null, [
      P("div", ws, [
        (k(!0), w(Z, null, we(e.names, (i) => (k(), w("span", {
          class: ge(["tab-nav__item", { selected: i.name === e.selectedTab }]),
          key: i.name,
          onClick: (o) => a("changeTab", i.name)
        }, T(i.label), 11, ks))), 128))
      ]),
      P("div", As, [
        Ze(n.$slots, "default", {}, void 0, !0)
      ])
    ], 64));
  }
}, Ps = /* @__PURE__ */ R(Is, [["__scopeId", "data-v-f099f506"]]), Es = {
  install: (e, t) => {
    console.log("Installing UI Kit..."), e.component("Accordion", un), e.component("Button", Vo), e.component("Checkbox", Za), e.component("CheckboxGroup", Zo), e.component("Input", rs), e.component("ProgressBar", os), e.component("ProgressCircle", ds), e.component("Radiobutton", gs), e.component("BaseTable", Ss), e.component("Tabs", Ps), console.log("Components registered");
  }
};
export {
  un as Accordion,
  Ss as BaseTable,
  Vo as Button,
  Za as Checkbox,
  Zo as CheckboxGroup,
  rs as Input,
  os as ProgressBar,
  ds as ProgressCircle,
  gs as Radiobutton,
  Ps as Tabs,
  Es as default
};
