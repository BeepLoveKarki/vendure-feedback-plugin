"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var FeedbackPlugin_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackPlugin = void 0;
const core_1 = require("@vendure/core");
const constants_1 = require("./constants");
const feedback_entity_1 = require("./entities/feedback.entity");
const feedback_service_1 = require("./service/feedback.service");
const api_extensions_1 = require("./api/api-extensions");
const feedback_shop_resolver_1 = require("./api/feedback-shop.resolver");
const feedback_admin_resolver_1 = require("./api/feedback-admin.resolver");
const path_1 = __importDefault(require("path"));
/**
 * An example Vendure plugin.
 *
 * @example
 * ```TypeScript
 * export const config: VendureConfig = {
 *   //...
 *   plugins: [
 *     ExamplePlugin.init({
 *       // options
 *     }),
 *   ]
 * }
 * ```
 */
let FeedbackPlugin = FeedbackPlugin_1 = class FeedbackPlugin {
    /**
     * The static `init()` method is a convention used by Vendure plugins which allows options
     * to be configured by the user.
     */
    static init(options) {
        this.options = options;
        return FeedbackPlugin_1;
    }
};
FeedbackPlugin.uiExtensions = {
    extensionPath: path_1.default.join(__dirname, 'ui-extensions'),
    ngModules: [
        {
            type: 'lazy',
            route: 'feedbacks',
            ngModuleFileName: 'feedback-ui-lazy.module.ts',
            ngModuleName: 'FeedbackUIModule',
        },
        {
            type: 'shared',
            ngModuleFileName: 'feedback-ui-extension.module.ts',
            ngModuleName: 'FeedbackExtensionModule',
        }
    ],
    translations: {
        en: path_1.default.join(__dirname, 'i18n/en.json')
    }
};
FeedbackPlugin = FeedbackPlugin_1 = __decorate([
    core_1.VendurePlugin({
        // Importing the PluginCommonModule gives all of our plugin's injectables (services, resolvers)
        // access to the Vendure core providers. See https://www.vendure.io/docs/typescript-api/plugin/plugin-common-module/
        imports: [core_1.PluginCommonModule],
        entities: [feedback_entity_1.FeedbackEntity],
        shopApiExtensions: {
            schema: api_extensions_1.shopApiExtensions,
            resolvers: [feedback_shop_resolver_1.FeedbackShopResolver],
        },
        adminApiExtensions: {
            schema: api_extensions_1.adminApiExtensions,
            resolvers: [feedback_admin_resolver_1.FeedbackAdminResolver],
        },
        providers: [
            feedback_service_1.FeedbackService,
            // By definiting the `PLUGIN_INIT_OPTIONS` symbol as a provider, we can then inject the
            // user-defined options into other classes, such as the {@link ExampleService}.
            { provide: constants_1.PLUGIN_INIT_OPTIONS, useFactory: () => FeedbackPlugin_1.options },
        ]
    })
], FeedbackPlugin);
exports.FeedbackPlugin = FeedbackPlugin;
//# sourceMappingURL=plugin.js.map