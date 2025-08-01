import { useDollarGet, useFetchPost } from "../service/useDollarFetchRequest";

/**
 * @description 检查 Token 是否有效
 * @param data Token 值
 * @return Promise<any>
 */
export const checkToken = (data: string): Promise<any> => {
  return useDollarGet('/User/checkToken', {
    headers: {
      token: data
    }
  });
};

/**
 * @description 检查是否是管理员
 * @param userid 用户 ID
 * @return Promise<any>
 */
export const checkAdmin = (userid: string): Promise<any> => {
  return useDollarGet(`/User/CheckAdmin/${userid}`);
};
