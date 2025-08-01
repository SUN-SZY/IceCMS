import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
  state: () => ({
    email: localStorage.getItem('email') || "",
    gender: localStorage.getItem('gender') || "",
    intro: localStorage.getItem('intro') || "",
    name: localStorage.getItem('name') || "",
    profile: localStorage.getItem('profile') || "",
    token: localStorage.getItem('token') || "",  // 从 localStorage 获取 token
    userid: localStorage.getItem('userid') || "",
    username: localStorage.getItem('username') || "",
    // 临时用户信息
    tempUser: JSON.parse(localStorage.getItem('temp-user') || 'null') as { username: string; email: string } | null,
  }),
  getters: {
    fullName: (state) => `${state.name} (${state.username})`,
    isLoggedIn: (state) => !!state.token,
    userIntro: (state) => state.intro || "这位用户很神秘！",
    // 检查是否有临时用户或正式用户
    hasUser: (state) => !!state.token || !!state.tempUser,
    // 获取当前用户信息（优先使用正式用户，否则使用临时用户）
    currentUser: (state) => {
      if (state.token) {
        return {
          name: state.name,
          email: state.email,
          profile: state.profile,
          userid: state.userid,
          username: state.username,
          isTemp: false
        };
      } else if (state.tempUser) {
        return {
          name: state.tempUser.username,
          email: state.tempUser.email,
          profile: '',
          userid: '',
          username: state.tempUser.username,
          isTemp: true
        };
      }
      return null;
    },
  },
  actions: {
    // 设置用户信息
    setUserInfo(userInfo: { email: string; gender: string; intro: string; name: string; profile: string; token: string; userid: string; username: string }) {
      this.email = userInfo.email;
      this.gender = userInfo.gender;
      this.intro = userInfo.intro;
      this.name = userInfo.name;
      this.profile = userInfo.profile;
      this.token = userInfo.token;
      this.userid = userInfo.userid;
      this.username = userInfo.username;

      // 保存到 localStorage
      localStorage.setItem('email', userInfo.email);
      localStorage.setItem('gender', userInfo.gender);
      localStorage.setItem('intro', userInfo.intro);
      localStorage.setItem('name', userInfo.name);
      localStorage.setItem('profile', userInfo.profile);
      localStorage.setItem('token', userInfo.token);
      localStorage.setItem('userid', userInfo.userid);
      localStorage.setItem('username', userInfo.username);
    },

    // 清除用户信息（用于退出登录）
    clearUserInfo() {
      this.email = "";
      this.gender = "";
      this.intro = "";
      this.name = "";
      this.profile = "";
      this.token = "";
      this.userid = "";
      this.username = "";

      // 清除 localStorage 中的用户数据
      localStorage.removeItem('email');
      localStorage.removeItem('gender');
      localStorage.removeItem('intro');
      localStorage.removeItem('name');
      localStorage.removeItem('profile');
      localStorage.removeItem('token');
      localStorage.removeItem('userid');
      localStorage.removeItem('username');
    },

    // 更新用户的简介
    updateUserIntro(newIntro: string) {
      this.intro = newIntro;
      localStorage.setItem('intro', newIntro);  // 同步更新到 localStorage
    },

    // 更新用户的资料图片
    updateProfilePicture(newProfile: string) {
      this.profile = newProfile;
      localStorage.setItem('profile', newProfile);  // 同步更新到 localStorage
    },

    // 设置临时用户信息
    setTempUser(tempUserInfo: { username: string; email: string }) {
      this.tempUser = tempUserInfo;
      localStorage.setItem('temp-user', JSON.stringify(tempUserInfo));
    },

    // 清除临时用户信息
    clearTempUser() {
      this.tempUser = null;
      localStorage.removeItem('temp-user');
    },

    // 清除所有用户信息（包括临时用户）
    clearAllUserInfo() {
      this.clearUserInfo();
      this.clearTempUser();
    },
  }
});