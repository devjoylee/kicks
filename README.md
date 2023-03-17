<!-- PROJECT LOGO -->
<div align="center">
  <img src="https://www.freepnglogos.com/uploads/shoes-png/download-vector-shoes-image-png-image-pngimg-2.png" alt="Logo" width="90" >
  <h1>Kicks, we're resellers</h1>
  <p>
    <a href="https://kicks-mobile.web.app/">View Demo Page</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details align="right">
  <summary>Table of Contents</summary>
    <div><a href="#About-The-Project">About The Project</a></div>
    <div><a href="#Built-With">Built With</a></div>
    <div><a href="#Getting-Started">Getting Started</a></div>
    <div><a href="#Main-Features">Main Features</a></div>
    <div><a href="#Commit-Convention">Commit Convention</a></div>
</details>

## About The Project

> It is a shortform trading platform for users who want to buy or resell the sneakers at a reasonable price. I started this project by participating in '[Shortform Video Service Challenge](https://www.numble.it/455e7898-2daf-4695-af90-d39a071d662c)' where I could collaborate with designers and developers.

- **Description** :
  Since there are video services such as "YouTube Shorts" or "Tiktok" that are commonly used, my team decided to clearly determine the service identity rather than having various contents. And my team narrow the scope to the topic of "Second-handed Sneakers Trading", which has a clear fan base and has a strong tendency such as limited edition and resell-tech. We thought this would be perfect service to people who want to see the product condition from various angles.

- **Production Period** : 2022.10 - 2022.12
- **Team Members**

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://static.tildacdn.com/tild3639-3034-4165-b264-663064356662/my-memoji-with-mac_1.png" width="100px;" alt="" /><br />
        <sub>
          <b>Jungho Kim(leader)</b><br />
          <b>Designer</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/devjoylee">
        <img src="https://avatars.githubusercontent.com/devjoylee" width="100px;" alt="" /><br />
        <sub>
          <b>Joy Lee</b><br />
          <b>Frontend Developer</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/rachel490">
        <img src="https://avatars.githubusercontent.com/rachel490" width="100px;" alt="" /><br />
        <sub>
          <b>Hyeri Shin</b><br />
          <b>Frontend Developer</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/seongho-joo">
        <img src="https://avatars.githubusercontent.com/seongho-joo" width="100px;" alt="" /><br />
        <sub>
          <b>Sungho Joo</b><br />
          <b>Backend Developer</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/ch0213">
        <img src="https://avatars.githubusercontent.com/ch0213" width="100px;" alt="" /><br />
        <sub>
          <b>Choonghwan Kim</b><br />
          <b>Backend Developer</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/jaeesu">
        <img src="https://avatars.githubusercontent.com/jaeesu" width="100px;" alt="" /><br />
        <sub>
          <b>Jaehee Seo</b><br />
          <b>Backend Developer</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

[👉 Go to Our Team Dashboard](https://www.notion.so/4-05669f195d0347e5827269bc8e480739)

[👉 Go to Figma](https://www.figma.com/file/NCOhkzgJqqmHmQt35byHvQ/4%ED%8C%80!?t=5dMnB93ZjU6bwYt6-0)

<br/>

## Built With

<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">&nbsp;&nbsp;
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">&nbsp;&nbsp;
<img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black"/>&nbsp;&nbsp;

<br/>

## Getting Started

You are able to start the app by typing the following commands in the command line:

```bash
git clone https://github.com/devjoylee/kicks.git
npm install
npm start
```

<br/>

## Main Features

### 1. Google Authentication

<div align="center">
<img src="https://user-images.githubusercontent.com/68415905/226029417-fd468a4c-d9c0-4686-99c4-885a0fdc9b89.JPG" alt="" width="300">
</div>

- **OAuth Service**
- Implemented Google sign-in using Firebase's Authentication provider
  **_[📝 Read More in my blog](https://devjoylee.github.io/series/OAuth-Service)_**
- Fetched the logged-in user's data (name, profile image..) and saved in sessionStorage to authenticate an user.

```js
// components/Login/GoogleLogin.tsx
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from 'server/firebase';
import * as S from './styles';

export const GoogleLogin = () => {
  const navigate = useNavigate();
  const login = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const res = await signInWithPopup(auth, provider);
      if (res) {
        const profile = {
          name: res.user.displayName,
          photoURL: res.user.photoURL
        };
        navigate('/');
        sessionStorage.setItem('kicks-user', JSON.stringify(profile));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return <S.GoogleButton onClick={login}>...</S.GoogleButton>;
};
```

<br>

### 2. Firebase Database

- Since the server was closed after the project ended, I refactored the server API code by changing the way to fetch data from the firebase database by myself.

<div align="center">
<img src="https://user-images.githubusercontent.com/68415905/226033564-4ea700e6-f7fb-4458-86c9-72550589bd18.JPG" alt="" >
</div>

- Code Preview

```ts
// utils/getVideos.ts
import { collection, ... } from 'firebase/firestore';
import { db } from 'server/firebase';
import { IVideoItem } from 'types';

// fetching video list from firebase database
export const getVideos = async () => {
  const q: Query<any> = collection(db, 'videos');
  const querySnapshot: QuerySnapshot<IVideoItem> = await getDocs(q);
  const docs: QueryDocumentSnapshot<IVideoItem>[] = querySnapshot.docs;
  const videos: IVideoItem[] = docs.map(
    (doc: QueryDocumentSnapshot<IVideoItem>) => doc.data()
  );
  return videos;
};
```

<br>

### 3. Video Swiper

<div align="center">
<img src="https://user-images.githubusercontent.com/68415905/226058794-2e56d9bc-fd3e-4a6f-bcf9-355b33e39e53.gif" alt="" width="280">
</div>

- Utilized the Swiper React library for the vertical video slider on the main page and the horizontal slider on the search page.

- Code Preview

```js
// pages/MainPage.tsx
<Swiper direction="vertical">
  {videoList?.map(video => (
    <SwiperSlide key={video.id}>
      <ContentsWrap videoData={video} />
    </SwiperSlide>
  ))}
</Swiper>
```

<br>

### 4. Chat with a Seller

<div align="center">
<img src="https://user-images.githubusercontent.com/68415905/226058804-1963efcf-d87a-4d66-880d-5f712d1b74e6.gif" alt="" width="280">
</div>

- Automatically create a chat room when you click the speech bubble icon in the main video component.
- Created two util functions, `dateConverter` and `dividedByDate` in order to make a section of messages by date.

- Code Preview

```js
// utils/dateConverter.tsx
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

export const dateConverter = (date: Date) => {
  const recieved = dayjs(date).format('YYYY-MM-DD');
  const today = dayjs(new Date()).format('YYYY-MM-DD');

  return recieved === today
    ? dayjs(date).format('h:mm A')
    : dayjs(date).fromNow();
};
```

```js
// utils/dividedByDate.tsx
import { IChat } from 'types';
import dayjs from 'dayjs';

export const dividedByDate = (messages: IChat[]) => {
  const sections: { [key: string]: IChat[] } = {};
  messages.forEach(message => {
    const date = dayjs(message.createAt).format('YYYY. MM. DD');
    if (Array.isArray(sections[date])) {
      sections[date].unshift(message);
    } else {
      sections[date] = [message];
    }
  });
  return Object.entries(sections).reverse();
};
```

<br>

## Commit Convention

The commit message is written with the GITMOJI icons in order to make commit messages more intuitive.

| Gitmoji | Meaning                     |
| ------- | --------------------------- |
| 🎉      | Init or begin a project.    |
| 🚚      | Move or rename resources    |
| ✨      | Introduce new features      |
| 💄      | Add the UI and style files  |
| ♻️      | Refactor code               |
| 📝      | Add or update documentation |
| ➕      | Add a dependency            |
| 🐛      | Fix a bug                   |
| 🚀      | Deploy stuff                |

REFERENCE : Gitmoji (http://gitmoji.dev/)
