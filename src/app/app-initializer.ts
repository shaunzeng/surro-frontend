import { LangService } from "./shared/lang.service";

export const appInitializer = (langService: LangService) => async () => {
    langService.init();
    console.log('app initialized');
}   