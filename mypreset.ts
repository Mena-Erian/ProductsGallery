import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export const MyPreset = definePreset(Aura, {
  semantic: {
    // Primary color palette
    primary: {
      50: '#fff4f0',
      100: '#ffe8d9',
      200: '#ffd0b3',
      300: '#ffb088',
      400: '#ff8c42',
      500: '#ff6b35', // Main primary color
      600: '#e55a2e',
      700: '#cc4d26',
      800: '#b3401f',
      900: '#993517',
      950: '#4d1a0c',
    },

    // Secondary color palette (red)
    secondary: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#e53e3e', // Main secondary color
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
      950: '#450a0a',
    },

    // Surface colors for backgrounds
    surface: {
      0: '#ffffff',
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#e5e5e5',
      300: '#d4d4d4',
      400: '#a3a3a3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
      950: '#0a0a0a',
    },

    // Color scheme for light/dark modes
    colorScheme: {
      light: {
        // Background colors
        background: '#ffffff',
        surface: {
          0: '#ffffff',
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },

        // Primary brand colors
        primary: {
          color: '#ff6b35',
          contrastColor: '#ffffff',
          hoverColor: '#e55a2e',
          activeColor: '#cc4d26',
        },

        // Secondary colors
        secondary: {
          color: '#e53e3e',
          contrastColor: '#ffffff',
          hoverColor: '#dc2626',
          activeColor: '#b91c1c',
        },

        // Text colors
        text: {
          color: '#1e293b',
          hoverColor: '#0f172a',
          mutedColor: '#64748b',
          hoverMutedColor: '#475569',
        },

        // Border colors
        border: {
          color: '#e2e8f0',
        },

        // Form elements
        formField: {
          background: '#ffffff',
          disabledBackground: '#f1f5f9',
          filledBackground: '#f8fafc',
          filledHoverBackground: '#f1f5f9',
          borderColor: '#cbd5e1',
          hoverBorderColor: '#94a3b8',
          focusBorderColor: '#ff6b35',
          invalidBorderColor: '#e53e3e',
          color: '#1e293b',
          disabledColor: '#94a3b8',
          placeholderColor: '#64748b',
        },

        // Navigation
        navigation: {
          item: {
            color: '#64748b',
            hoverColor: '#ff6b35',
            activeColor: '#ff6b35',
            background: 'transparent',
            hoverBackground: '#fff4f0',
            activeBackground: '#ffe8d9',
          },
        },

        // Mask overlay
        mask: {
          background: 'rgba(0,0,0,0.4)',
        },
      },

      dark: {
        // Background colors
        background: '#0f172a',
        surface: {
          0: '#0f172a',
          50: '#1e293b',
          100: '#334155',
          200: '#475569',
          300: '#64748b',
          400: '#94a3b8',
          500: '#cbd5e1',
          600: '#e2e8f0',
          700: '#f1f5f9',
          800: '#f8fafc',
          900: '#ffffff',
        },

        // Primary brand colors
        primary: {
          color: '#ff6b35',
          contrastColor: '#ffffff',
          hoverColor: '#ff8c42',
          activeColor: '#e55a2e',
        },

        // Secondary colors
        secondary: {
          color: '#e53e3e',
          contrastColor: '#ffffff',
          hoverColor: '#f87171',
          activeColor: '#dc2626',
        },

        // Text colors
        text: {
          color: '#f8fafc',
          hoverColor: '#ffffff',
          mutedColor: '#94a3b8',
          hoverMutedColor: '#cbd5e1',
        },

        // Border colors
        border: {
          color: '#334155',
        },

        // Form elements
        formField: {
          background: '#1e293b',
          disabledBackground: '#0f172a',
          filledBackground: '#334155',
          filledHoverBackground: '#475569',
          borderColor: '#475569',
          hoverBorderColor: '#64748b',
          focusBorderColor: '#ff6b35',
          invalidBorderColor: '#e53e3e',
          color: '#f8fafc',
          disabledColor: '#64748b',
          placeholderColor: '#94a3b8',
        },

        // Navigation
        navigation: {
          item: {
            color: '#94a3b8',
            hoverColor: '#ff6b35',
            activeColor: '#ff6b35',
            background: 'transparent',
            hoverBackground: 'rgba(255, 107, 53, 0.1)',
            activeBackground: 'rgba(255, 107, 53, 0.2)',
          },
        },

        // Mask overlay
        mask: {
          background: 'rgba(0,0,0,0.6)',
        },
      },
    },
  },

  // Component-specific overrides
  components: {
    // Button component customization
    button: {
      root: {
        paddingX: '1rem',
        paddingY: '0.5rem',
        borderRadius: '0.5rem',
        gap: '0.5rem',
        focusRing: {
          width: '2px',
          style: 'solid',
          offset: '2px',
        },
        transitionDuration: '{transition.duration}',
      },
      // Fixed: Simplified color scheme structure
      colorScheme: {
        light: {
          root: {
            // Primary button - using root structure
            primary: {
              background: '#ff6b35',
              hoverBackground: '#e55a2e',
              activeBackground: '#cc4d26',
              borderColor: '#ff6b35',
              hoverBorderColor: '#e55a2e',
              activeBorderColor: '#cc4d26',
              color: '#ffffff',
              hoverColor: '#ffffff',
              activeColor: '#ffffff',
            },

            // Secondary button
            secondary: {
              background: '#e53e3e',
              hoverBackground: '#dc2626',
              activeBackground: '#b91c1c',
              borderColor: '#e53e3e',
              hoverBorderColor: '#dc2626',
              activeBorderColor: '#b91c1c',
              color: '#ffffff',
              hoverColor: '#ffffff',
              activeColor: '#ffffff',
            },

            // Success button
            success: {
              background: '#22c55e',
              hoverBackground: '#16a34a',
              activeBackground: '#15803d',
              borderColor: '#22c55e',
              hoverBorderColor: '#16a34a',
              activeBorderColor: '#15803d',
              color: '#ffffff',
              hoverColor: '#ffffff',
              activeColor: '#ffffff',
            },

            // Info button
            info: {
              background: '#3b82f6',
              hoverBackground: '#2563eb',
              activeBackground: '#1d4ed8',
              borderColor: '#3b82f6',
              hoverBorderColor: '#2563eb',
              activeBorderColor: '#1d4ed8',
              color: '#ffffff',
              hoverColor: '#ffffff',
              activeColor: '#ffffff',
            },

            // Warning button
            warn: {
              background: '#f59e0b',
              hoverBackground: '#d97706',
              activeBackground: '#b45309',
              borderColor: '#f59e0b',
              hoverBorderColor: '#d97706',
              activeBorderColor: '#b45309',
              color: '#ffffff',
              hoverColor: '#ffffff',
              activeColor: '#ffffff',
            },

            // Help button
            help: {
              background: '#8b5cf6',
              hoverBackground: '#7c3aed',
              activeBackground: '#6d28d9',
              borderColor: '#8b5cf6',
              hoverBorderColor: '#7c3aed',
              activeBorderColor: '#6d28d9',
              color: '#ffffff',
              hoverColor: '#ffffff',
              activeColor: '#ffffff',
            },

            // Danger button
            danger: {
              background: '#ef4444',
              hoverBackground: '#dc2626',
              activeBackground: '#b91c1c',
              borderColor: '#ef4444',
              hoverBorderColor: '#dc2626',
              activeBorderColor: '#b91c1c',
              color: '#ffffff',
              hoverColor: '#ffffff',
              activeColor: '#ffffff',
            },

            // Contrast button
            contrast: {
              background: '#1e293b',
              hoverBackground: '#334155',
              activeBackground: '#475569',
              borderColor: '#1e293b',
              hoverBorderColor: '#334155',
              activeBorderColor: '#475569',
              color: '#ffffff',
              hoverColor: '#ffffff',
              activeColor: '#ffffff',
            },
          },
        },

        dark: {
          root: {
            // Same structure for dark mode with adjusted colors
            primary: {
              background: '#ff6b35',
              hoverBackground: '#ff8c42',
              activeBackground: '#e55a2e',
              borderColor: '#ff6b35',
              hoverBorderColor: '#ff8c42',
              activeBorderColor: '#e55a2e',
              color: '#ffffff',
              hoverColor: '#ffffff',
              activeColor: '#ffffff',
            },
            // Add other button variants for dark mode as needed
            secondary: {
              background: '#ef4444', // red-500 - slightly lighter than original
              hoverBackground: '#dc2626', // red-600
              activeBackground: '#b91c1c', // red-700
              borderColor: '#ef4444',
              hoverBorderColor: '#dc2626',
              activeBorderColor: '#b91c1c',
              color: '#ffffff',
              hoverColor: '#ffffff',
              activeColor: '#ffffff',
            },
          },
        },
      },
    },

    // Input field customization
    inputtext: {
      root: {
        background: '{formField.background}',
        disabledBackground: '{formField.disabledBackground}',
        filledBackground: '{formField.filledBackground}',
        filledHoverBackground: '{formField.filledHoverBackground}',
        borderColor: '{formField.borderColor}',
        hoverBorderColor: '{formField.hoverBorderColor}',
        focusBorderColor: '{formField.focusBorderColor}',
        invalidBorderColor: '{formField.invalidBorderColor}',
        color: '{formField.color}',
        disabledColor: '{formField.disabledColor}',
        placeholderColor: '{formField.placeholderColor}',
        shadow: 'none',
        paddingX: '0.75rem',
        paddingY: '0.75rem',
        borderRadius: '0.5rem',
        // Fixed: Proper focusRing structure
        focusRing: {
          width: '2px',
          style: 'solid',
          offset: '0px',
          shadow: '0 0 0 2px rgba(255, 107, 53, 0.2)',
        },
        transitionDuration: '{transition.duration}',
      },
    },
    autocomplete: {
      colorScheme: {
        dark: {
          option: {
            color: 'black',
            focusColor: '#e53e3e',
            selectedColor: '#737373',
          },
        },
      },
    },
    // Card customization
    card: {
      root: {
        background: '{content.background}',
        borderRadius: '0.75rem',
        color: '{content.color}',
        shadow:
          '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
      },
      body: {
        padding: '1.5rem',
        gap: '0.75rem',
      },
      caption: {
        gap: '0.5rem',
      },
      title: {
        fontSize: '1.25rem',
        fontWeight: '600',
      },
      subtitle: {
        color: '{text.muted.color}',
      },
    },
  },
});
