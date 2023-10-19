const getApiSidebar = () => {
  return [
    {
      text: "功能",
      collapsible: true,
      items: [
        {
          text: "已实现",
          link: "/api/"
        }
      ]
    }
  ];
};

const getComponentsSidebar = () => {
  return [
    {
      text: "组件",
      items: [
        {
          text: "Button 按钮",
          link: "/components/button"
        },
        {
          text: "Card 卡片",
          link: "/components/card"
        },
        {
          text: "DatePicker 日期选择框",
          link: "/components/date-picker"
        },
        {
          text: "Drawer 抽屉",
          link: "/components/drawer"
        },
        {
          text: "Form 表单",
          link: "/components/form"
        },
        {
          text: "Input 输入框",
          link: "/components/input"
        },
        {
          text: "Modal 对话框 ",
          link: "/components/modal"
        },
        {
          text: "Searh 搜索",
          link: "/components/search"
        },
        {
          text: "Select 选择器",
          link: "/components/select"
        },
        {
          text: "Table 表格",
          link: "/components/table"
        },
        {
          text: "Area 地址库",
          link: "/components/area"
        },
        {
          text: "Cascader 级联选择",
          link: "/components/cascader"
        },
        {
          text: "Upload 上传",
          link: "/components/upload"
        }
      ]
    }
  ];
};

const getGuideSidebar = () => {
  return [
    {
      text: "指南",
      items: [
        {
          text: "快速开始",
          link: "/guide/"
        },
        {
          text: "定制主题",
          link: "/guide/theme"
        }
      ]
    }
  ];
};

const getVersionLog = () => {
    return [
      {
        text: "更新日志",
        items: [
          {
            text: "0.0.1",
            link: "/version-log/0-0-1"
          }
        ]
      }
    ];
  };

export default {
  "/api/": getApiSidebar(),
  "/components/": getComponentsSidebar(),
  "/guide/": getGuideSidebar(),
  "/version-log/": getVersionLog(),
};
