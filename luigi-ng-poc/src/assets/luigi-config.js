loadLuigi = () => {
  Luigi.setConfig({
    navigation: {
      nodes: [
        {
          pathSegment: 'home',
          label: 'User Last Login : ' + new Date().toISOString().slice(0,19),
          hideFromNav: false,
          children: [
            {
              pathSegment: 'overview',
              label: 'Overview',
              icon: 'bbyd-dashboard',
              viewUrl: "/overview",
              loadingIndicator: {
                enabled: false
              }
            }
          ]
        }
      ],
      profile: {
        logout: {
          label: 'Logout',
          //customLogoutFn: 'myLogoutFn'
        }
      }
    },
    communication: {
      customMessagesListeners: {
        'overview': () => {
          loadLuigiAfter()
        }
      }
    },
    routing: {
      /**
       * Development:
       * For path routing, set to false
       * For hash routing, set to true
       */
      useHashRouting: true
    },
    settings: {
      header: {
        title: 'Luigi JavaScript',
        //logo: '/logo.png',
        //favicon: '/favicon.ico'
      },

    }
  });

}

loadLuigiAfter = () => {
  console.log(Luigi.getConfig())
  Luigi.setConfig({
    navigation: {
      nodes: [
        {
          pathSegment: 'home',
          label: 'User Last Login : ' + new Date(),
          hideFromNav: false,
          children: [
            {
              pathSegment: 'overview',
              label: 'Overview-new',
              icon: 'bbyd-dashboard',
              viewUrl: "/overview",
              loadingIndicator: {
                enabled: false
              }
            }
          ]
        }
      ],
      profile: {
        logout: {
          label: 'Logout',
          //customLogoutFn: 'myLogoutFn'
        }
      }
    },
    communication: {
      customMessagesListeners: {
        'overview': () => {
          loadLuigi()
        }
      }
    },
    routing: {
      /**
       * Development:
       * For path routing, set to false
       * For hash routing, set to true
       */
      useHashRouting: true
    },
    settings: {
      header: {
        title: 'Luigi JavaScript',
        //logo: '/logo.png',
        //favicon: '/favicon.ico'
      },

    }
  });
}
