/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          tag     => text to display on badge
          tagColor  => class to apply on badge element
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [
  // {
  //   url: "/apps/email",
  //   name: "Email",
  //   slug: "email",
  //   icon: "MailIcon",
  //   i18n: "Email",
  // },
  {
    url: null,
    name: "Dashboard(merchants)",
    tag: "8",
    tagColor: "warning",
    icon: "LayoutIcon",
    i18n: "Dashboard",
    submenu: [
      {
        url: null,
        name: "Analytics",
        slug: "dashboard-analytics",
        i18n: "Analytics",
      },
      {
          url: null,
          name: "Definition",
          slug: "dashboard-analytics",
          i18n: "Definition",
        },
        {
              url: null,
              name: "Features",
              slug: "dashboard-analytics",
              i18n: "Features",
              icon: "ListIcon",
              submenu: [
          {
            url: '/dashboard/ecommerce',
            name: "eCommerce",
            slug: "dashboard-ecommerce",
            i18n: "eCommerce",
          },
           {
             url: "/ui-elements/ag-grid-table",
             name: "Redemption",
             slug: "ag-grid-table",
             icon: "GridIcon",
             i18n: "Redemption",
           },
          {
            url: "/apps/email",
            name: "Email",
            slug: "email",
            icon: "LayoutIcon",
            i18n: "Email",
          },
              {
                url: "/apps/todo",
                name: "Todo",
                slug: "todo",
                icon: "CheckSquareIcon",
                i18n: "Todo",
              },
              {
                url: "/apps/chat",
                name: "Chat",
                slug: "chat",
                icon: "MessageSquareIcon",
                i18n: "Chat",
              },
          {
            url: null,
            name: "Support",
            icon: "SmileIcon",
            i18n: "Support",
            submenu: [
              {
                url: 'https://tripcarte.asia/terms-conditions/',
                name: "Terms & Conditions",
                icon: "BookOpenIcon",
                slug: "external",
                i18n: "Terms & Conditions",
                target: "_blank"
              },
              {
                url: 'https://tripcarte.asia/privacy-policy/',
                name: "Privacy Policy",
                icon: "LifeBuoyIcon",
                slug: "external",
                i18n: "Privacy Policy",
                target: "_blank"
              },
              ]
            },
        ]
      },
      {
        url: null,
        name: "User",
        icon: "UsersIcon",
        i18n: "User",
        submenu: [
          {
            url: '/apps/user/user-list',
            name: "List",
            icon: "UserIcon",
            slug: "app-user-list",
            i18n: "List",
          },
          {
            url: '/apps/user/user-view/268',
            name: "View",
            icon: "UserIcon",
            slug: "app-user-view",
            i18n: "View",
          },
          {
            url: '/apps/user/user-edit/268',
            name: "Edit",
            slug: "app-user-edit",
            i18n: "Edit",
          },
        ]
      },
    ]
  },
  {
    header: "UI",
    icon: "LayersIcon",
    i18n: "UI",
    items: [
    {
      url: null,
      name: "Colors",
      slug: "colors",
      icon: "LayersIcon",
      i18n: "Colors",
    },
      {
        url: null,
        name: "Data List",
        tag: "new",
        tagColor: "primary",
        icon: "ListIcon",
        i18n: "DataList",
        submenu: [
          {
            url: '/charts-and-maps/charts/echarts',
            name: "echarts",
            slug: "extra-component-charts-echarts",
            i18n: "echarts",
         },
          {
            url: "/ui-elements/ag-grid-table",
            name: "Redemption",
            slug: "ag-grid-table",
            icon: "GridIcon",
            i18n: "Redemption",
          },
          {
            url: '/ui-elements/data-list/thumb-view',
            name: "Thumb View",
            slug: "data-list-thumb-view",
            i18n: "Point of Sale ( POS )",
          },
          {
            url: '/ui-elements/data-list/list-view',
            name: "List View",
            slug: "data-list-list-view",
            i18n: "ListView",
          },
        ]
      },
      {
        url: null,
        name: "Extensions",
        icon: "PlusCircleIcon",
        i18n: "Extensions",
        submenu: [
          // {
          //   name: "Import/Export",
          //   i18n: "Import/Export",
          //   submenu: [

          //   ]
          // },
          {
            url: "/import-export/import",
            name: "Import",
            icon: "HomeIcon",
            slug: "import",
            i18n: "Import"
          },
          {
            url: "/import-export/export",
            name: "Export",
            icon: "HomeIcon",
            slug: "export",
            i18n: "Export"
          }
        ]
      },
    ]
  },
  {
    header: "Forms & Table",
    icon: "Edit3Icon",
    i18n: "FormsAndTable",
    items: [
    {
        url: null,
        name: "Definition",
        slug: "dashboard-analytics",
        i18n: "Definition",
      },
      {
        url: null,
        name: "Features",
        icon: "CopyIcon",
        i18n: "Features",
        submenu: [
          {
            url: '/charts-and-maps/charts/chartjs',
            name: "chartjs",
            slug: "extra-component-charts-chartjs",
            i18n: "chartjs",
          },
          {
            url: '/forms/form-elements/checkbox',
            name: "Transaction View",
            slug: "form-element-checkbox",
            i18n: "Transaction View",
          },
          {
            url: '/forms/form-elements/radio',
            name: "Redemption Reports",
            slug: "form-element-radio",
            i18n: "Redemption Reports",
          },
          {
            url: '/forms/form-elements/input',
            name: "Inventory View",
            slug: "form-element-input",
            i18n: "Inventory View",
          },
        ]
      },
    ]
  },
  {
    header: "Others",
    icon: "MoreHorizontalIcon",
    i18n: "Others",
    items: [
    {
      url: null,
      name: "Definition",
      slug: "form-element-number-input",
      i18n: "Definition",
    },
    {
      url: null,
      name: "Features",
      slug: "form-element-number-input",
      i18n: "Features",
    },

        // {
        //  url: '/forms/form-elements/select',
        //  name: "Select",
        //  slug: "form-element-select",
        //  i18n: "Select",
        // },
        {
          url: '/ui-elements/card/statistics',
          name: "Dashboard View",
          slug: "form-element-switch",
          i18n: "Dashboard View",
        },
        {
          url: '/forms/form-elements/checkbox',
          name: "Transaction View",
          slug: "form-element-checkbox",
          i18n: "Transaction View",
        },
      ]
      },
]
