import * as vue from 'vue';
import { Component, Ref, App } from 'vue';
import { PageData, Awaitable, SiteData } from '../../types/shared.js';
export { HeadConfig, Header, LocaleConfig, PageData, SiteData } from '../../types/shared.js';

declare const inBrowser: boolean;

interface Route {
    path: string;
    data: PageData;
    component: Component | null;
}
interface Router {
    route: Route;
    go: (href?: string) => Promise<void>;
    onBeforeRouteChange?: (to: string) => Awaitable<void>;
    onAfterRouteChanged?: (to: string) => Awaitable<void>;
}
declare function useRouter(): Router;
declare function useRoute(): Route;

interface VitePressData<T = any> {
    site: Ref<SiteData<T>>;
    page: Ref<PageData>;
    theme: Ref<T>;
    frontmatter: Ref<PageData['frontmatter']>;
    title: Ref<string>;
    description: Ref<string>;
    lang: Ref<string>;
    localePath: Ref<string>;
}
declare function useData<T = any>(): VitePressData<T>;

interface EnhanceAppContext {
    app: App;
    router: Router;
    siteData: Ref<SiteData>;
}
interface Theme {
    Layout: Component;
    NotFound?: Component;
    enhanceApp?: (ctx: EnhanceAppContext) => void;
    setup?: () => void;
}

declare function withBase(path: string): string;

declare const Content: vue.DefineComponent<{
    onContentUpdated: FunctionConstructor;
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    onContentUpdated: FunctionConstructor;
}>>, {}>;

export { Content, EnhanceAppContext, Route, Router, Theme, VitePressData, inBrowser, useData, useRoute, useRouter, withBase };