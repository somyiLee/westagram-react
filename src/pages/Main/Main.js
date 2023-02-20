import React from "react";
import "./Main.css";
import "../../style/common.css";

const mainWrap = () => {
  return (
    <>
      <nav>
        <div className="logoWrap">
          <img src="img/instagram.png" alt="logo" />
          <h1>Westagram</h1>
        </div>
        <div className="searchWrap">
          <i className="fa-sharp fa-solid fa-magnifying-glass search"></i>
          <input type="text" placeholder="검색" />
        </div>
        <div className="menuWrap">
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
            alt="탐색"
          />
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            alt="하트"
          />
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            alt="마이페이지"
          />
        </div>
      </nav>
      <main>
        <div className="contentsContainer">
          <section className="feeds">
            <header>
              <h2 className="blind">Feeds</h2>
              <div className="profileFlex userProfile">
                <div className="userPofileImg headProfile"></div>
                <p className="bold">wecode_bootcamp</p>
              </div>
            </header>
            <article>
              <div className="postImg">
                <img src="/img/userimg.jpeg" alt="사용자 게시 이미지" />
              </div>
              <div className="feedBottom">
                <div className="feedMenuBar">
                  <i className="fa-sharp fa-regular fa-heart"></i>
                  <i className="fa-sharp fa-regular fa-comment"></i>
                  <i className="fa-sharp fa-regular fa-share-from-square"></i>
                  <i className="fa-sharp fa-regular fa-bookmark"></i>
                  <div className="profileFlex">
                    <div className="userPofileImg likeUserPofile"></div>
                    <span className="bold">seungyoun_iain</span>님 &nbsp;
                    <span className="bold">외 4명</span>이 좋아합니다
                  </div>
                </div>
                <div className="postText">
                  <p>
                    <span className="bold">wecode_bootcamp</span> &nbsp;어쩌구
                    저쩌구저쩌주저ㅓ어어ㅓㄴ
                  </p>
                  <ul className="commentArea blind"></ul>
                  <span className="gray"> 54분 전</span>
                </div>
              </div>
              <fieldset className="commentWrap">
                <input type="text" placeholder="댓글달기" />
                <button className="addCommentBtn">게시</button>
              </fieldset>
            </article>
          </section>
          <div className="main_right">
            <header className="profileFlex">
              <div className="userPofileImg rightProfile"></div>
              <div>
                <h2 className="bold">wecode_bootcamp</h2>
                <p className="gray">WeCode | 위코드</p>
              </div>
            </header>
            <section className="storyWrap">
              <div className="flexBetween">
                <h3 className="gray">스토리</h3>
                <p>모두보기</p>
              </div>
              <article className="newStory profileFlex">
                <div className="grdientBorder">
                  <div className="userPofileImg storyProfile"></div>
                </div>
                <div>
                  <p className="bold">somyi_s2</p>
                  <p className="gray">4분전</p>
                </div>
              </article>
              <article className="newStory profileFlex">
                <div className="grdientBorder">
                  <div className="userPofileImg storyProfile"></div>
                </div>
                <div>
                  <p className="bold">somyi_s2</p>
                  <p className="gray">4분전</p>
                </div>
              </article>
              <article className="newStory profileFlex">
                <div className="grdientBorder">
                  <div className="userPofileImg storyProfile"></div>
                </div>
                <div>
                  <p className="bold">somyi_s2</p>
                  <p className="gray">4분전</p>
                </div>
              </article>
              <article className="newStory profileFlex">
                <div className="grdientBorder">
                  <div className="userPofileImg storyProfile"></div>
                </div>
                <div>
                  <p className="bold">somyi_s2</p>
                  <p className="gray">4분전</p>
                </div>
              </article>
              <article className="newStory profileFlex">
                <div className="grdientBorder">
                  <div className="userPofileImg storyProfile"></div>
                </div>
                <div>
                  <p className="bold">somyi_s2</p>
                  <p className="gray">4분전</p>
                </div>
              </article>
            </section>
            <section className="recommondWrap">
              <div className="flexBetween">
                <h3 className="gray">회원님을 위한 추천</h3>
                <p>모두보기</p>
              </div>
              <article className="newRocommond">
                <div className="profileFlex">
                  <div className="userPofileImg rcmProfile"></div>
                  <div className="idSection">
                    <p className="bold">guess_who</p>
                    <p className="gray overflowEllip">
                      mettugi_world님 외 3명이 팔로우하고 있습니다.
                    </p>
                  </div>
                  <button>팔로우</button>
                </div>
              </article>
              <article className="newRocommond">
                <div className="profileFlex">
                  <div className="userPofileImg rcmProfile"></div>
                  <div className="idSection">
                    <p className="bold">guess_who</p>
                    <p className="gray overflowEllip">
                      mettugi_world님 외 3명이 팔로우하고 있습니다.
                    </p>
                  </div>
                  <button>팔로우</button>
                </div>
              </article>
              <article className="newRocommond">
                <div className="profileFlex">
                  <div className="userPofileImg rcmProfile"></div>
                  <div className="idSection">
                    <p className="bold">guess_who</p>
                    <p className="gray overflowEllip">
                      mettugi_world님 외 3명이 팔로우하고 있습니다.
                    </p>
                  </div>
                  <button>팔로우</button>
                </div>
              </article>
            </section>
            <footer className="gray">
              <ul>
                <li>Instagram 정보</li>
                <li>지원</li>
                <li>지원</li>
                <li>홍보센터</li>
                <li>API</li>
                <li>채용정보</li>
                <li>개인정보처리방침</li>
                <li>약관</li>
                <li>디렉터리</li>
                <li>프로필</li>
                <li>해시태그</li>
                <li>언어</li>
              </ul>
              <small>&copy; 2019 INSTAGRAM</small>
            </footer>
          </div>
        </div>
      </main>
    </>
  );
};

export default mainWrap;
