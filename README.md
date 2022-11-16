# nextJs_practice

## Next JS 설치

> npx create-next-app@latest
> yarn create next-app
> pnpm create next-app

> npx create-next-app@latest --typescript
> yarn create next-app --typescript
> pnpm create next-app --typescript

현재는 기본으로 설치실행을 해도 타입스크립트를 사용할 꺼냐고 물어 본다

## 환경설정

코드에서 `import React from 'react';` 를 할 필요 없다
함수형 컴포넌트가 아닌 클래스 형 컴포넌트도 동일하다
만약에 `class Index extends Component` 와 같은 형식으로 하는걸 선호한다면, `import { Component } from 'react';` 는 선언 해주어야한다
혹은 `class Index extends React.Component` 로 작성해도 무방하다

그 다음, 하기의 명령어를 통해 개발 서버를 실행한다

> yarn run dev

## 페이지 라우팅

Next.js 는 라우터를 내장하고 있다

우선 pages 디렉토리에 about.js 파일을 생성해서 컴포넌트를 만들어 보자

```

const About = () => (
    <div>
        <h2>hallo About</h2>
    </div>
)

export default About;
```

```
import Link from 'next/link'

const Index = () => (
    <div>
        <h1>
            hallo Main, Index
        </h1>
        <h2>
            <Link href="/about">
                <a>about</a>
            </Link>
        </h2>
    </div>
);

export default Index;
```

주의 하실 점은 `<Link>` 컴포넌트를 사용 할 때, react-router 에선 to 를 썼겠지만 여기선 **href**를 써야 하고, 이 컴포넌트 내부에 문자열이 아닌 컴포넌트 혹은 엘리먼트가 있어야한다

추가적으로 스타일링을 하실땐, 그 내부의 엘리먼트에 style 혹은 className 을 설정하면 된다
꼭 a 태그가 아니여도 되된다
만약에 컴포넌트를 넣으신다면 해당 컴포넌트가 onClick props 를 전달받아서 실행하도록 해야한다

### 스타일 적용

```

import Link from 'next/link'

const Index = () => (
    <div>
        <h1>
            hallo Main, Index
        </h1>
        <h2>
            <Link href="/about">
                <div style={{background: 'black', color: 'white'}}>about</div>
            </Link>
        </h2>
    </div>
);
```

```
import Link from 'next/link'

const Index = () => (
    <div>
        <h1>
            hallo Main, Index
        </h1>
        <h2>
            <Link href="/about">
                <div>about</div>
            </Link>
        </h2>
        <div>about</div>
        <style jsx>{`
          div {
            color: red;
          }

        `}</style>
    </div>
);
```

## 공용 컴포넌트 만들기

```
import Header from './Header';

const Layout = ({children}) => (
    <div>
        <Header/>
        {children}
    </div>
);

export default Layout;
```

Layout 을 불러와서 감싸준다

```
import Layout from '../components/Layout';

const About = () => (
    <Layout>
        <h2>hallo about</h2>
    </Layout>
)

export default About;
```

```
import Link from 'next/link'
import Layout from '../components/Layout';

const Index = () => (
    <Layout>
        <h1>
            hallo Main, Index
        </h1>
        <h2>
            <Link href="/about">
                <a style={{background: 'black', color: 'white'}}>about</a>
            </Link>
        </h2>
    </Layout>
);

export default Index;
```

## Next JS 커스터마이징

### next.config.js

Next.js에서 커스텀 설정을 하기 위해서는 프로젝트 디렉터리의 루트(package.json 옆)에 next.config.js 또는 next.config.mjs 파일을 만들 수 있다
next.config.js는 JSON 파일이 아닌 일반 Node.js 모듈이다
Next.js 서버 및 빌드 단계에서 사용되며 브라우저 빌드에는 포함되지 않는다

### Redirects (URL변경됨)

Redirect을 사용하면 들어오는 request 경로를 다른 destination 경로로 Redirect할 수 있다
Redirect을 사용하려면 next.config.js에서 redirects 키를 사용할 수 있다

redirects은 source, destination 및 permanent 속성이 있는 객체를 포함하는 배열을 반환하는 비동기 함수다

- source: 들어오는 request 경로 패턴 (request 경로)
- destination: 라우팅하려는 경로 (redirect할 경로)
- permanent: true인 경우 클라이언트와 search 엔진에 redirect를 영구적으로 cache하도록 지시하는 308 status code를 사용하고, false인 경우 일시적이고 cache되지 않은 307 status code를 사용한다

[Redirects](https://nextjs.org/docs/api-reference/next.config.js/redirects)

### Rewrites (URL변경되지 않음)

Rewrites를 사용하면 들어오는 request 경로를 다른 destination 경로에 매핑할 수 있다
Rewrites은 URL 프록시 역할을 하고 destination 경로를 mask하여 사용자가 사이트에서 위치를 변경하지 않은 것처럼 보이게 한다
반대로 redirects은 새 페이지로 reroute되고 URL 변경 사항을 표시한다

[Rewrites](https://nextjs.org/docs/api-reference/next.config.js/rewrites)

### API 사용 (Movie Poster Path)

`https://image.tmdb.org/t/p/w500/${movie.poster_path}`

주의! fetch할 때 /api/movies 또는 http://localhost:3000/api/movies 둘 다 가능하지만 http가 아닌 https로 fetch하게 되면 오류가 발생한다

[next.config.js](https://nextjs.org/docs/api-reference/next.config.js/introduction)

## getServerSideProps

page에서 서버 측 랜더링 함수인 getServerSideProps함수를 export하는 경우 Next.js는 getServerSideProps에서 반환된 데이터를 사용하여 각 request에서 이 페이지를 pre-render한다
getServerSideProps는 서버 측에서만 실행되며 브라우저에서는 실행되지 않는다

[getServerSideProps](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props)

getServerSideProps를 사용하여 request시 데이터 fetch하기
다음 예는 request 시 데이터를 fetch하고 결과를 pre-render하는 방법을 보여준다
(fetch할 때 오류 뜨시는 분들은 https를 http로 바꿔주면 된다)

```
export default function Home({ data }) {
// 데이터 랜더링
}

// 매 request마다 실행
export async function getServerSideProps() {
const res = await fetch(`https://.../data`);
const data = await res.json();

// props를 통해 page에 data전달
return { props: { data } }
}
```

[Using getServerSideProps to fetch data at request time](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props#using-getserversideprops-to-fetch-data-at-request-time)

### getServerSideProps (타입스크립트와 함께 사용하기)

[타입스크립트와 함께 사용하기](https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props#getserversideprops-with-typescript)

## Next JS Component 설정
