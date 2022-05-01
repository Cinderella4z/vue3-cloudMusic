<template>

  <navbar>
    <template #left>
      <van-icon name="cross" size="1.5rem" @click="close" />
    </template>
    <template #center>
      <span class="text" style="font-size: 1.2rem;">手机号登录</span>
    </template>
    <template #right>
      <van-icon name="exchange" size="1.5rem" @click="exchange" />
    </template>
  </navbar>

  <!-- 切换是否成功 -->
  <div v-if="showNext">
    <div class="tab">
      <h3>登陆体验更多精彩</h3>
      <p>未注册的手机号登录后将自动创建账号</p>
    </div>

    <div class="input">
      <input type="text" placeholder="输入手机号" v-model="phone" class="text">
      <van-icon name="cross" @click="clear" v-show="phone.length > 0" />
    </div>

    <!-- 切换登录方式 -->
    <div v-if="ifChange">
      <input type="submit" value="发送验证码" class="submit" @click="submit1">
      <div class="go" @click="close">立即体验</div>
    </div>

    <div v-else class="input">
      <input type="text" placeholder="输入密码" v-model="password" class="text">
      <input type="submit" value="下一步" class="submit" @click="submit2">
      <div class="go" @click="close">立即体验</div>
    </div>



  </div>

  <div v-else>
    <div class="tab">
      <h3>请输入验证码</h3>
      <p>已发送至+86 {{ phone }}</p>
    </div>

    <div class="code">
      <van-password-input :value="value" :focused="showKeyboard" @focus="showKeyboard = true" :mask="false"
        :length="4" />
    </div>

    <van-number-keyboard :show="showKeyboard" @blur="showKeyboard = false" @input="onInput" @delete="onDelete" />




  </div>



</template>

<script setup>
// 组件相关
import { ref, } from 'vue'
import { Toast } from 'vant';
import navbar from 'comp/common/navbar/index.vue'
// hooks
import { Login } from 'network/login/index'
import { usePinia, } from 'hooks/pinia';
import { useRouters } from 'hooks/router';
import { useKeepAlive } from 'hooks/useKeepAlive'


//跳过登录功能
const showNext = ref(true)
const { push, router } = useRouters()
const close = () => {
  push('/my')
}
// 切换登录方式
const ifChange = ref(true)
const exchange = () => {
  ifChange.value = !ifChange.value
}

//输入框相关
const { sentCode } = Login();
const phone = ref('');
const clear = () => {
  phone.value = ''
}
// 提交手机号 获取验证码
const submit1 = () => {
  if (phone.value.length < 11 || phone.value.length > 11) {
    Toast.fail('手机号必须为11位');
  }
  else {
    sentCode(phone.value)
      .then(res => {
        const mesg = res.data.message ? res.data.message : '发送成功'
        Toast(mesg)
        res.data.code === 200 ? showNext.value = false : ''
      })
  }
}


// 输入并验证 验证码
const { login } = Login()
const value = ref('')//对应的code
const showKeyboard = ref(true)
const { addKeepAlive } = useKeepAlive(router)

const onInput = (e) => {
  value.value += e
  if (value.value.length === 4) {
    // 验证码进行验证
    login(phone.value, value.value)
      .then(res => {
        setPropoty('userInfo', res.data)
        addKeepAlive();
        push('/my')
      })
      .catch(rea => {
        Toast.fail('验证失败')
      })
  }
}
const onDelete = () => {
  value.value = value.value.substring(0, value.value.length - 1)
}

// 账号密码登录
const password = ref('')
const { login2 } = Login()
const { setPropoty } = usePinia()

const submit2 = () => {

  login2(phone.value, password.value).then(res => {
    if (res.data.code === 200) {
      addKeepAlive();
      setPropoty('userInfo', res.data)
      push('/my')
    }
    else {
      Toast.fail('账号或密码错误')
    }
  })
  // login2(15707009378, 'cinderella323').then(res => {
  //   const need = getPropoty('needKeepAlive')
  //   setPropoty('userInfo', res.data)
  //   // router.options.routes.foreach(item => {
  //   //   item.meta.keepAlive = false
  //   // })
  //   for (let i of router.options.routes) {
  //     need.value.push(i.name)
  //   }

  //   push('/my')
  // })
}




</script>



<style lang='less' scoped>
@margin-top: {
  margin-top: 20px;
}

.tab {
  @margin();
  @margin-top();

  p {
    margin-top: 5px;
    color: @baseColor;
    font-size: 14px;
  }
}

.input {
  height: 5vh;
  border-bottom: 1px solid @baseColor;
  @margin();
  @margin-top();

  .text {
    border: none;
    outline: none;
    height: 5vh;
    width: 95%;
    background-color: @backColor;
  }
}

.submit {
  @margin();
  border: none;
  outline: none;
  border-radius: 30px;
  margin-top: 40px;
  width: 90%;
  height: 45px;
  background-color: rgba(255, 0, 0, 0.693);
  color: white;
}

.go {
  @margin();
  @margin-top();
  text-align: center;
  color: @baseColor;
}

.code {
  margin-top: 40px;
}
</style>