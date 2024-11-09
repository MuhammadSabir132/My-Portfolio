"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[448], {
    9448: function(e, s, t) {
        t.r(s),
        t.d(s, {
            default: function() {
                return r
            }
        });
        var l = t(7437)
          , n = t(2265);
        function r() {
            let e = (0,
            n.useRef)(null)
              , s = (0,
            n.useRef)(null);
            return (0,
            n.useEffect)( () => {
                let t = e.current
                  , l = s.current;
                if (t && l) {
                    let e = () => {
                        t.classList.toggle("bx-x"),
                        l.classList.toggle("active")
                    }
                    ;
                    t.addEventListener("click", e);
                    let s = () => {
                        t.classList.contains("bx-x") && l.classList.contains("active") && (t.classList.remove("bx-x"),
                        l.classList.remove("active"))
                    }
                    ;
                    return window.addEventListener("scroll", s),
                    () => {
                        t.removeEventListener("click", e),
                        window.removeEventListener("scroll", s)
                    }
                }
            }
            , []),
            (0,
            l.jsxs)("header", {
                className: "header",
                children: [(0,
                l.jsx)("a", {
                    href: "#",
                    className: "logo",
                    children: "Raheem"
                }), (0,
                l.jsx)("i", {
                    className: "bx bx-menu",
                    id: "menu-icon",
                    ref: e
                }), (0,
                l.jsxs)("nav", {
                    className: "navbar",
                    ref: s,
                    children: [(0,
                    l.jsx)("a", {
                        href: "#home",
                        id: "active",
                        children: "Home"
                    }), (0,
                    l.jsx)("a", {
                        href: "#about",
                        children: "About"
                    }), (0,
                    l.jsx)("a", {
                        href: "#skills",
                        children: "Skills"
                    }), (0,
                    l.jsx)("a", {
                        href: "#portfolio",
                        children: "Portfolio"
                    }), (0,
                    l.jsx)("a", {
                        href: "#contact",
                        children: "Contact"
                    })]
                })]
            })
        }
        t(5542)
    }
}]);
