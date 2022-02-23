import { UserRole } from '../app/core/services/auth.roles';

export const environment = {
  production: false,
  SCARF_ANALYTICS : false,
  adminRoot: '/',
  apiUrl: '/api',
  defaultMenuType: 'menu-default',
  subHiddenBreakpoint: 1440,
  menuHiddenBreakpoint: 768,
  themeColorStorageKey: 'surro-themecolor',
  isMultiColorActive: false,
  /*
  Color Options:
  'light.blueyale', 'light.blueolympic', 'light.bluenavy', 'light.greenmoss',
  'light.greenlime', 'light.yellowgranola', 'light.greysteel', 'light.orangecarrot',
  'light.redruby', 'light.purplemonster'

  'dark.blueyale', 'dark.blueolympic', 'dark.bluenavy', 'dark.greenmoss',
  'dark.greenlime', 'dark.yellowgranola', 'dark.greysteel', 'dark.orangecarrot',
  'dark.redruby', 'dark.purplemonster'
  */
  defaultColor: 'light.orangecarrot',
  isDarkSwitchActive: true,
  defaultDirection: 'ltr',
  themeRadiusStorageKey: 'surro-key',
  isAuthGuardActive: true,
  defaultRole: UserRole.Admin,
  localStorageKey:'surro'
};
