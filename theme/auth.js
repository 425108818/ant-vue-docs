import axios from "axios";
import { setConfig } from '@/';

// 使用vue-antd-components组件库相关配置
export const setVueAntDComponentsConfig = () => {
  const headers = {
    'X-Api-Token': '213c25bfe7fc9333651a7b91a8b51be74bfe949a43f7583a901779af6cf67002',
    'X-Client-Actor-UUID': '272317025734361'
  };

  setTimeout(()=>{
    setConfig({
      area: {
        API_AREA_BASE_URI: 'https://area.muniu56.urland.cn',
      },
      upload: {
        fetchImageToken: () => axios.post('https://api-gz.jinniu-platform.urland.cn/common-api/v1/image-tokens'),
        fetchFileToken: () => axios.post('https://api-gz.jinniu-platform.urland.cn/common-api/v1/file-tokens'),
        ossFileUploadUrl: 'https://oss.muniu56.urland.cn',
        ossImgUploadUrl: 'https://oss.muniu56.urland.cn',
      },
      select: {
        fetchOptionData: (url, params) => axios.get(url, { params, headers }),
      },
    });
  },2000)
}
