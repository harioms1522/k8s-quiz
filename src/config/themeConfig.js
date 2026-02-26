/**
 * Centralized Theme Configuration
 *
 * Change the entire website's color scheme by updating ACTIVE_THEME below.
 * Each palette defines every CSS variable used across the app.
 */

const THEME_PALETTES = {
  emberForge: {
    name: 'Ember Forge',
    description: 'Classic dark RPG with ember and amber — the original theme',
    colors: {
      bg:            '#0d0a06',
      bg2:           '#13100a',
      surface:       '#1a1510',
      surface2:      '#221c14',
      border:        '#3d3020',
      border2:       '#5a4530',
      ember:         '#f97316',
      ember2:        '#fbbf24',
      ember3:        '#fde68a',
      emberDark:     '#c2410c',
      blood:         '#dc2626',
      bloodLight:    '#f87171',
      bloodPale:     '#fca5a5',
      sage:          '#4ade80',
      sageBright:    '#22c55e',
      ice:           '#67e8f9',
      violet:        '#a78bfa',
      text:          '#e8d5b0',
      muted:         '#8a7055',
      dim:           '#5a4535',
      emberRgb:      '249, 115, 22',
      ember2Rgb:     '251, 191, 36',
      sageRgb:       '74, 222, 128',
      bloodRgb:      '220, 38, 38',
      bloodLightRgb: '248, 113, 113',
      iceRgb:        '103, 232, 249',
    },
  },

  frostKingdom: {
    name: 'Frost Kingdom',
    description: 'Cool blue ice kingdom — crisp and mystical',
    colors: {
      bg:            '#060a0d',
      bg2:           '#0a1015',
      surface:       '#0f1a22',
      surface2:      '#142530',
      border:        '#1e3a4f',
      border2:       '#2d5570',
      ember:         '#38bdf8',
      ember2:        '#67e8f9',
      ember3:        '#cffafe',
      emberDark:     '#0284c7',
      blood:         '#dc2626',
      bloodLight:    '#f87171',
      bloodPale:     '#fca5a5',
      sage:          '#4ade80',
      sageBright:    '#22c55e',
      ice:           '#a5f3fc',
      violet:        '#c4b5fd',
      text:          '#c8e6f5',
      muted:         '#5588a0',
      dim:           '#355570',
      emberRgb:      '56, 189, 248',
      ember2Rgb:     '103, 232, 249',
      sageRgb:       '74, 222, 128',
      bloodRgb:      '220, 38, 38',
      bloodLightRgb: '248, 113, 113',
      iceRgb:        '165, 243, 252',
    },
  },

  shadowRealm: {
    name: 'Shadow Realm',
    description: 'Deep purple cyberpunk — mystical and futuristic',
    colors: {
      bg:            '#0a0612',
      bg2:           '#100b18',
      surface:       '#18102a',
      surface2:      '#201838',
      border:        '#35255a',
      border2:       '#4a3580',
      ember:         '#a78bfa',
      ember2:        '#c4b5fd',
      ember3:        '#ede9fe',
      emberDark:     '#7c3aed',
      blood:         '#ef4444',
      bloodLight:    '#f87171',
      bloodPale:     '#fca5a5',
      sage:          '#4ade80',
      sageBright:    '#22c55e',
      ice:           '#67e8f9',
      violet:        '#e879f9',
      text:          '#d8ccf0',
      muted:         '#7a65a8',
      dim:           '#503d75',
      emberRgb:      '167, 139, 250',
      ember2Rgb:     '196, 181, 253',
      sageRgb:       '74, 222, 128',
      bloodRgb:      '239, 68, 68',
      bloodLightRgb: '248, 113, 113',
      iceRgb:        '103, 232, 249',
    },
  },

  enchantedForest: {
    name: 'Enchanted Forest',
    description: 'Deep emerald green — nature and growth',
    colors: {
      bg:            '#040d06',
      bg2:           '#08130a',
      surface:       '#0c1a10',
      surface2:      '#122214',
      border:        '#1e3d22',
      border2:       '#2d5a32',
      ember:         '#4ade80',
      ember2:        '#86efac',
      ember3:        '#dcfce7',
      emberDark:     '#16a34a',
      blood:         '#dc2626',
      bloodLight:    '#f87171',
      bloodPale:     '#fca5a5',
      sage:          '#a3e635',
      sageBright:    '#84cc16',
      ice:           '#67e8f9',
      violet:        '#a78bfa',
      text:          '#c5e8d0',
      muted:         '#558a60',
      dim:           '#355a3d',
      emberRgb:      '74, 222, 128',
      ember2Rgb:     '134, 239, 172',
      sageRgb:       '163, 230, 53',
      bloodRgb:      '220, 38, 38',
      bloodLightRgb: '248, 113, 113',
      iceRgb:        '103, 232, 249',
    },
  },

  dragonsBreath: {
    name: "Dragon's Breath",
    description: 'Fiery reds and warm golds — the heat of battle',
    colors: {
      bg:            '#0d0604',
      bg2:           '#150a06',
      surface:       '#1f100a',
      surface2:      '#2a1610',
      border:        '#4a2518',
      border2:       '#6a3525',
      ember:         '#ef4444',
      ember2:        '#f97316',
      ember3:        '#fde68a',
      emberDark:     '#b91c1c',
      blood:         '#f43f5e',
      bloodLight:    '#fb7185',
      bloodPale:     '#fecdd3',
      sage:          '#4ade80',
      sageBright:    '#22c55e',
      ice:           '#67e8f9',
      violet:        '#a78bfa',
      text:          '#f0d5c0',
      muted:         '#9a6050',
      dim:           '#6a4035',
      emberRgb:      '239, 68, 68',
      ember2Rgb:     '249, 115, 22',
      sageRgb:       '74, 222, 128',
      bloodRgb:      '244, 63, 94',
      bloodLightRgb: '251, 113, 133',
      iceRgb:        '103, 232, 249',
    },
  },

  ironCitadel: {
    name: 'Iron Citadel',
    description: 'Neutral steel and slate — disciplined and professional',
    colors: {
      bg:            '#0a0a0c',
      bg2:           '#101013',
      surface:       '#18181b',
      surface2:      '#202024',
      border:        '#3f3f46',
      border2:       '#52525b',
      ember:         '#a1a1aa',
      ember2:        '#d4d4d8',
      ember3:        '#f4f4f5',
      emberDark:     '#71717a',
      blood:         '#dc2626',
      bloodLight:    '#f87171',
      bloodPale:     '#fca5a5',
      sage:          '#4ade80',
      sageBright:    '#22c55e',
      ice:           '#67e8f9',
      violet:        '#a78bfa',
      text:          '#d4d4d8',
      muted:         '#71717a',
      dim:           '#52525b',
      emberRgb:      '161, 161, 170',
      ember2Rgb:     '212, 212, 216',
      sageRgb:       '74, 222, 128',
      bloodRgb:      '220, 38, 38',
      bloodLightRgb: '248, 113, 113',
      iceRgb:        '103, 232, 249',
    },
  },
};

/**
 * ━━━ CHANGE THIS TO SWITCH THEMES ━━━
 *
 * Available: 'emberForge' | 'frostKingdom' | 'shadowRealm'
 *          | 'enchantedForest' | 'dragonsBreath' | 'ironCitadel'
 */
export const ACTIVE_THEME = 'enchantedForest';

export const getActiveTheme = () => THEME_PALETTES[ACTIVE_THEME] || THEME_PALETTES.emberForge;

export const getThemeColors = () => getActiveTheme().colors;

export const getAllThemeNames = () =>
  Object.entries(THEME_PALETTES).map(([key, val]) => ({
    key,
    name: val.name,
    description: val.description,
  }));

/**
 * Returns an object mapping CSS custom-property names to values,
 * ready to be applied on the document root.
 */
export const getCSSVariables = (themeKey) => {
  const palette = THEME_PALETTES[themeKey] || THEME_PALETTES[ACTIVE_THEME];
  const c = palette.colors;

  return {
    '--bg':              c.bg,
    '--bg2':             c.bg2,
    '--surface':         c.surface,
    '--surface2':        c.surface2,
    '--border':          c.border,
    '--border2':         c.border2,
    '--ember':           c.ember,
    '--ember2':          c.ember2,
    '--ember3':          c.ember3,
    '--ember-dark':      c.emberDark,
    '--blood':           c.blood,
    '--blood-light':     c.bloodLight,
    '--blood-pale':      c.bloodPale,
    '--sage':            c.sage,
    '--sage-bright':     c.sageBright,
    '--ice':             c.ice,
    '--violet':          c.violet,
    '--text':            c.text,
    '--muted':           c.muted,
    '--dim':             c.dim,
    '--ember-rgb':       c.emberRgb,
    '--ember2-rgb':      c.ember2Rgb,
    '--sage-rgb':        c.sageRgb,
    '--blood-rgb':       c.bloodRgb,
    '--blood-light-rgb': c.bloodLightRgb,
    '--ice-rgb':         c.iceRgb,
  };
};

export { THEME_PALETTES };
export default THEME_PALETTES;
