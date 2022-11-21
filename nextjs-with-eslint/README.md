# NextJS Introduction

## Next JS Movie search page

1. Movie open API 사용

2. useRef, useState 등을 활용하여 검색기능 구현

3. fetch api 활용하여 데이터 가져오기
   -> axios 나 next js 에 맞는 라이브러리 사용

4. api key는 env 환경 변수를 활용하여 숨겨 사용
   -> rewrites를 사용하여 key 숨김

> ### 문제점
>
> 현재 tailwindcss 사용하려고 라이브러리 설치,
> 하지만 적용안됨
> 현재 문제점 파악 중
>
> #### 해결
>
> `_app.js` 파일에 스타일 적용
>
> ```
> import '../styles/globals.css'
> ```

> ### 문제점
>
> ```
> Error: Aborted because ./pages/movie.js is not accepted
> ```
>
> - 검색 후 스페이스를 누르면 검색 대상이 없어 진다
>   왜 그러지는 모르겠으나, 조건문으로 해결

## Next JS 상태관리

### ContextAPI

`_app.js`에 상태 적용하여 사용

```
// useState와 createContext import 로 가져온다
import { useState, createContext } from 'react'

// createContext를 가져온다
export const GlobalContext = createContext({})

// context로 부터 보낼 value 값 지정
const value = {상태 지정}


return <>
   <GlobalContext.Provider value={value}>
      <Component {...pageProps} />
   </GlobalContext.Provider>
</>
```
