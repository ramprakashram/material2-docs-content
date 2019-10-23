(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/button'), require('@angular/material/icon'), require('@angular/material/menu')) :
    typeof define === 'function' && define.amd ? define('@angular/material-examples/material/menu', ['exports', '@angular/core', '@angular/material/button', '@angular/material/icon', '@angular/material/menu'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.materialExamples = global.ng.materialExamples || {}, global.ng.materialExamples.material = global.ng.materialExamples.material || {}, global.ng.materialExamples.material.menu = {}), global.ng.core, global.ng.material.button, global.ng.material.icon, global.ng.material.menu));
}(this, function (exports, i0, i1, i3, i2) { 'use strict';

    var _c0 = ["menu", "matMenu"];
    /**
     * @title Menu with icons
     */
    var MenuIconsExample = /** @class */ (function () {
        function MenuIconsExample() {
        }
        MenuIconsExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'menu-icons-example',
                        templateUrl: 'menu-icons-example.html',
                        styleUrls: ['menu-icons-example.css'],
                    },] },
        ];
        MenuIconsExample.ɵfac = function MenuIconsExample_Factory(t) { return new (t || MenuIconsExample)(); };
        MenuIconsExample.ɵcmp = i0.ɵɵdefineComponent({ type: MenuIconsExample, selectors: [["menu-icons-example"]], decls: 20, vars: 1, consts: [["mat-icon-button", "", "aria-label", "Example icon-button with a menu", 3, "matMenuTriggerFor"], ["mat-menu-item", ""], ["mat-menu-item", "", "disabled", ""]], template: function MenuIconsExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "button", 0);
                i0.ɵɵelementStart(1, "mat-icon");
                i0.ɵɵtext(2, "more_vert");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "mat-menu", null, _c0);
                i0.ɵɵelementStart(5, "button", 1);
                i0.ɵɵelementStart(6, "mat-icon");
                i0.ɵɵtext(7, "dialpad");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(8, "span");
                i0.ɵɵtext(9, "Redial");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(10, "button", 2);
                i0.ɵɵelementStart(11, "mat-icon");
                i0.ɵɵtext(12, "voicemail");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(13, "span");
                i0.ɵɵtext(14, "Check voice mail");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(15, "button", 1);
                i0.ɵɵelementStart(16, "mat-icon");
                i0.ɵɵtext(17, "notifications_off");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(18, "span");
                i0.ɵɵtext(19, "Disable alerts");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                var _r0 = i0.ɵɵreference(4);
                i0.ɵɵproperty("matMenuTriggerFor", _r0);
            } }, directives: [i1.MatButton, i2.MatMenuTrigger, i3.MatIcon, i2._MatMenu, i2.MatMenuItem], styles: [""] });
        return MenuIconsExample;
    }());
    /*@__PURE__*/ i0.ɵsetClassMetadata(MenuIconsExample, [{
            type: i0.Component,
            args: [{
                    selector: 'menu-icons-example',
                    templateUrl: 'menu-icons-example.html',
                    styleUrls: ['menu-icons-example.css'],
                }]
        }], null, null);

    var _c0$1 = ["menu", "matMenu"];
    /**
     * @title Basic menu
     */
    var MenuOverviewExample = /** @class */ (function () {
        function MenuOverviewExample() {
        }
        MenuOverviewExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'menu-overview-example',
                        templateUrl: 'menu-overview-example.html',
                        styleUrls: ['menu-overview-example.css'],
                    },] },
        ];
        MenuOverviewExample.ɵfac = function MenuOverviewExample_Factory(t) { return new (t || MenuOverviewExample)(); };
        MenuOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: MenuOverviewExample, selectors: [["menu-overview-example"]], decls: 8, vars: 1, consts: [["mat-button", "", 3, "matMenuTriggerFor"], ["mat-menu-item", ""]], template: function MenuOverviewExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "button", 0);
                i0.ɵɵtext(1, "Menu");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "mat-menu", null, _c0$1);
                i0.ɵɵelementStart(4, "button", 1);
                i0.ɵɵtext(5, "Item 1");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "button", 1);
                i0.ɵɵtext(7, "Item 2");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                var _r1 = i0.ɵɵreference(3);
                i0.ɵɵproperty("matMenuTriggerFor", _r1);
            } }, directives: [i1.MatButton, i2.MatMenuTrigger, i2._MatMenu, i2.MatMenuItem], styles: [""] });
        return MenuOverviewExample;
    }());
    /*@__PURE__*/ i0.ɵsetClassMetadata(MenuOverviewExample, [{
            type: i0.Component,
            args: [{
                    selector: 'menu-overview-example',
                    templateUrl: 'menu-overview-example.html',
                    styleUrls: ['menu-overview-example.css'],
                }]
        }], null, null);

    var _c0$2 = ["aboveMenu", "matMenu"];
    var _c1 = ["belowMenu", "matMenu"];
    var _c2 = ["beforeMenu", "matMenu"];
    var _c3 = ["afterMenu", "matMenu"];
    /**
     * @title Menu positioning
     */
    var MenuPositionExample = /** @class */ (function () {
        function MenuPositionExample() {
        }
        MenuPositionExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'menu-position-example',
                        templateUrl: 'menu-position-example.html',
                        styleUrls: ['menu-position-example.css'],
                    },] },
        ];
        MenuPositionExample.ɵfac = function MenuPositionExample_Factory(t) { return new (t || MenuPositionExample)(); };
        MenuPositionExample.ɵcmp = i0.ɵɵdefineComponent({ type: MenuPositionExample, selectors: [["menu-position-example"]], decls: 32, vars: 4, consts: [["mat-button", "", 3, "matMenuTriggerFor"], ["yPosition", "above"], ["mat-menu-item", ""], ["yPosition", "below"], ["xPosition", "before"], ["xPosition", "after"]], template: function MenuPositionExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "button", 0);
                i0.ɵɵtext(1, "Above");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "mat-menu", 1, _c0$2);
                i0.ɵɵelementStart(4, "button", 2);
                i0.ɵɵtext(5, "Item 1");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "button", 2);
                i0.ɵɵtext(7, "Item 2");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(8, "button", 0);
                i0.ɵɵtext(9, "Below");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(10, "mat-menu", 3, _c1);
                i0.ɵɵelementStart(12, "button", 2);
                i0.ɵɵtext(13, "Item 1");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(14, "button", 2);
                i0.ɵɵtext(15, "Item 2");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(16, "button", 0);
                i0.ɵɵtext(17, "Before");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(18, "mat-menu", 4, _c2);
                i0.ɵɵelementStart(20, "button", 2);
                i0.ɵɵtext(21, "Item 1");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(22, "button", 2);
                i0.ɵɵtext(23, "Item 2");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(24, "button", 0);
                i0.ɵɵtext(25, "After");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(26, "mat-menu", 5, _c3);
                i0.ɵɵelementStart(28, "button", 2);
                i0.ɵɵtext(29, "Item 1");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(30, "button", 2);
                i0.ɵɵtext(31, "Item 2");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                var _r2 = i0.ɵɵreference(3);
                var _r3 = i0.ɵɵreference(11);
                var _r4 = i0.ɵɵreference(19);
                var _r5 = i0.ɵɵreference(27);
                i0.ɵɵproperty("matMenuTriggerFor", _r2);
                i0.ɵɵadvance(8);
                i0.ɵɵproperty("matMenuTriggerFor", _r3);
                i0.ɵɵadvance(8);
                i0.ɵɵproperty("matMenuTriggerFor", _r4);
                i0.ɵɵadvance(8);
                i0.ɵɵproperty("matMenuTriggerFor", _r5);
            } }, directives: [i1.MatButton, i2.MatMenuTrigger, i2._MatMenu, i2.MatMenuItem], styles: [""] });
        return MenuPositionExample;
    }());
    /*@__PURE__*/ i0.ɵsetClassMetadata(MenuPositionExample, [{
            type: i0.Component,
            args: [{
                    selector: 'menu-position-example',
                    templateUrl: 'menu-position-example.html',
                    styleUrls: ['menu-position-example.css'],
                }]
        }], null, null);

    var _c0$3 = ["animals", "matMenu"];
    var _c1$1 = ["vertebrates", "matMenu"];
    var _c2$1 = ["invertebrates", "matMenu"];
    var _c3$1 = ["fish", "matMenu"];
    var _c4 = ["amphibians", "matMenu"];
    var _c5 = ["reptiles", "matMenu"];
    /**
     * @title Nested menu
     */
    var NestedMenuExample = /** @class */ (function () {
        function NestedMenuExample() {
        }
        NestedMenuExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'nested-menu-example',
                        templateUrl: 'nested-menu-example.html',
                        styleUrls: ['nested-menu-example.css'],
                    },] },
        ];
        NestedMenuExample.ɵfac = function NestedMenuExample_Factory(t) { return new (t || NestedMenuExample)(); };
        NestedMenuExample.ɵcmp = i0.ɵɵdefineComponent({ type: NestedMenuExample, selectors: [["nested-menu-example"]], decls: 70, vars: 6, consts: [["mat-button", "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], ["mat-menu-item", ""], ["mat-menu-item", "", "disabled", ""]], template: function NestedMenuExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "button", 0);
                i0.ɵɵtext(1, "Animal index");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "mat-menu", null, _c0$3);
                i0.ɵɵelementStart(4, "button", 1);
                i0.ɵɵtext(5, "Vertebrates");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "button", 1);
                i0.ɵɵtext(7, "Invertebrates");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(8, "mat-menu", null, _c1$1);
                i0.ɵɵelementStart(10, "button", 1);
                i0.ɵɵtext(11, "Fishes");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(12, "button", 1);
                i0.ɵɵtext(13, "Amphibians");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(14, "button", 1);
                i0.ɵɵtext(15, "Reptiles");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(16, "button", 2);
                i0.ɵɵtext(17, "Birds");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(18, "button", 2);
                i0.ɵɵtext(19, "Mammals");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(20, "mat-menu", null, _c2$1);
                i0.ɵɵelementStart(22, "button", 2);
                i0.ɵɵtext(23, "Insects");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(24, "button", 2);
                i0.ɵɵtext(25, "Molluscs");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(26, "button", 2);
                i0.ɵɵtext(27, "Crustaceans");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(28, "button", 2);
                i0.ɵɵtext(29, "Corals");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(30, "button", 2);
                i0.ɵɵtext(31, "Arachnids");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(32, "button", 2);
                i0.ɵɵtext(33, "Velvet worms");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(34, "button", 2);
                i0.ɵɵtext(35, "Horseshoe crabs");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(36, "mat-menu", null, _c3$1);
                i0.ɵɵelementStart(38, "button", 2);
                i0.ɵɵtext(39, "Baikal oilfish");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(40, "button", 2);
                i0.ɵɵtext(41, "Bala shark");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(42, "button", 2);
                i0.ɵɵtext(43, "Ballan wrasse");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(44, "button", 2);
                i0.ɵɵtext(45, "Bamboo shark");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(46, "button", 2);
                i0.ɵɵtext(47, "Banded killifish");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(48, "mat-menu", null, _c4);
                i0.ɵɵelementStart(50, "button", 2);
                i0.ɵɵtext(51, "Sonoran desert toad");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(52, "button", 2);
                i0.ɵɵtext(53, "Western toad");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(54, "button", 2);
                i0.ɵɵtext(55, "Arroyo toad");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(56, "button", 2);
                i0.ɵɵtext(57, "Yosemite toad");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(58, "mat-menu", null, _c5);
                i0.ɵɵelementStart(60, "button", 2);
                i0.ɵɵtext(61, "Banded Day Gecko");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(62, "button", 2);
                i0.ɵɵtext(63, "Banded Gila Monster");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(64, "button", 2);
                i0.ɵɵtext(65, "Black Tree Monitor");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(66, "button", 2);
                i0.ɵɵtext(67, "Blue Spiny Lizard");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(68, "button", 3);
                i0.ɵɵtext(69, "Velociraptor");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                var _r6 = i0.ɵɵreference(3);
                var _r7 = i0.ɵɵreference(9);
                var _r8 = i0.ɵɵreference(21);
                var _r9 = i0.ɵɵreference(37);
                var _r10 = i0.ɵɵreference(49);
                var _r11 = i0.ɵɵreference(59);
                i0.ɵɵproperty("matMenuTriggerFor", _r6);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("matMenuTriggerFor", _r7);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("matMenuTriggerFor", _r8);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("matMenuTriggerFor", _r9);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("matMenuTriggerFor", _r10);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("matMenuTriggerFor", _r11);
            } }, directives: [i1.MatButton, i2.MatMenuTrigger, i2._MatMenu, i2.MatMenuItem], styles: [""] });
        return NestedMenuExample;
    }());
    /*@__PURE__*/ i0.ɵsetClassMetadata(NestedMenuExample, [{
            type: i0.Component,
            args: [{
                    selector: 'nested-menu-example',
                    templateUrl: 'nested-menu-example.html',
                    styleUrls: ['nested-menu-example.css'],
                }]
        }], null, null);

    var EXAMPLES = [
        MenuIconsExample,
        MenuOverviewExample,
        MenuPositionExample,
        NestedMenuExample,
    ];
    var MenuExamplesModule = /** @class */ (function () {
        function MenuExamplesModule() {
        }
        MenuExamplesModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            i1.MatButtonModule,
                            i3.MatIconModule,
                            i2.MatMenuModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                    },] },
        ];
        MenuExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: MenuExamplesModule });
        MenuExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function MenuExamplesModule_Factory(t) { return new (t || MenuExamplesModule)(); }, imports: [[
                    i1.MatButtonModule,
                    i3.MatIconModule,
                    i2.MatMenuModule,
                ]] });
        return MenuExamplesModule;
    }());
    /*@__PURE__*/ i0.ɵɵsetNgModuleScope(MenuExamplesModule, { declarations: [MenuIconsExample,
            MenuOverviewExample,
            MenuPositionExample,
            NestedMenuExample], imports: [i1.MatButtonModule,
            i3.MatIconModule,
            i2.MatMenuModule], exports: [MenuIconsExample,
            MenuOverviewExample,
            MenuPositionExample,
            NestedMenuExample] });
    /*@__PURE__*/ i0.ɵsetClassMetadata(MenuExamplesModule, [{
            type: i0.NgModule,
            args: [{
                    imports: [
                        i1.MatButtonModule,
                        i3.MatIconModule,
                        i2.MatMenuModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }], null, null);

    /**
     * Generated bundle index. Do not edit.
     */

    exports.MenuIconsExample = MenuIconsExample;
    exports.MenuOverviewExample = MenuOverviewExample;
    exports.MenuPositionExample = MenuPositionExample;
    exports.NestedMenuExample = NestedMenuExample;
    exports.MenuExamplesModule = MenuExamplesModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=material-examples-material-menu.umd.js.map
