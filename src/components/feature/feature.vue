<template>
  <section id="feature">
    <div class="container pt-4">
      <div class="row">
        <div class="col-md-6" data-wow-delay="0.6s">
          <h2 class="text-uppercase">Career Path</h2>
          <ul>
            <li>2015</li>
            <ul>
              <li>Bắt đầu học tại Học Viện Kỹ thuật Mật Mã</li>
            </ul>
            <li>
              2018
              <ul>
                <li>
                  Tham gia training java(core, servlet, spring framework, design
                  pattern) tại công ty HomeDirect
                </li>
              </ul>
            </li>
            <li>Tháng 3 Năm 2019 - Tháng 9 Năm 2021</li>
            <ul>
              <li>Làm việc tại công ty Luvina</li>
            </ul>
            <li>Tháng 5 Năm 2019</li>
            <ul>
              <li>
                Đạt giải nhất nghiên cứu khoa học về IoT tại Học Viện Kỹ Thuật
                Mật Mã
              </li>
              <li>
                <a
                  href="https://github.com/ChienND1997/iot-master"
                  target="__blank"
                  >Source Code</a
                >
              </li>
            </ul>
            <li>Tháng 12 Năm 2020</li>
            <ul>
              <li>Tốt nghiệp Học Viện Kỹ Thuật Mật Mã</li>
            </ul>
            <li>Tháng 9 Năm 2021 - Hiện tại</li>
            <ul>
              <li>Làm việc tại công ty CMC Global</li>
            </ul>
          </ul>
        </div>
        <div class="col-md-6" data-wow-delay="0.6s">
          <img
            src="../../../src/assets/images/career-path.jpg"
            class="img-responsive"
            alt="feature img"
            width="100%"
          />
        </div>
      </div>
    </div>

    <div class="container pt-5">
      <div class="row">
        <div class="col-md-6" data-wow-delay="0.6s">
          <img
            src="../../../src/assets/images/skill.png"
            class="img-responsive"
            alt="feature img"
            width="100%"
          />
        </div>
        <div class="col-md-6" data-wow-delay="0.6s">
          <h2 class="text-uppercase">Skill</h2>
          <ul>
            <li>JavaScript</li>
            <li>Java Spring Boot</li>
            <li>Vue js</li>
            <li>Oracle DB</li>
            <li>Testing</li>
            <li>Jest js</li>
            <li>Jasmine</li>
            <li>Third Party Lib</li>
            <ul>
              <li>WebRTC</li>
              <li>Webpack, Babel</li>
              <li>Vuetify</li>
              <li>Bootstrap</li>
              <li>Lodash</li>
              <li>Moment</li>
              <li>ChartJS, ApexChart</li>
            </ul>
            <li>Jira, Redmine</li>
            <li>Source control: Git, Github, GitLab, SVN</li>
            <li>Sequence Diagram</li>
            <li>Tạo tài liệu cho dự án</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container pt-5">
      <div class="row">
        <div class="col-md-6" data-wow-delay="0.6s">
          <h2 class="text-uppercase">Project</h2>
          <ul>
            <li style="font-weight: 600;">Real estate project</li>
            <ul>
              <li>Tham gia phát triển tính năng và giao diện của dự án</li>
              <li>Viết script db để export data</li>
            </ul>
            <li style="font-weight: 600;">Optim(Iot: tham khảo tại <a href="https://optim.com" target="_blank">Link</a>)</li>
            <ul>
              <li>Tham gia phát triển tính năng và giao diện của dự án</li>
              <ul>
                <li>Phát triển tính năng remote control tới Mobile, Desktop(giống teamviewer)</li>
                <li>Viết TestCase, Integration Test cho API(sử dụng Jest Js)</li>
                <li>Deploy lên K8s</li>
                <li>Thực hiện vẽ sequence diagram cho tính năng mới</li>
                <li>Estimate task</li>
              </ul>
            </ul>
            <li style="font-weight: 600;">Event Sending System</li>
            <ul>
              <li>Tham gia phát triển tính năng và giao diện của dự án</li>
              <ul>
                <li>Tạo giao diện thông qua design figma</li>
                <li>Giao diện quản lý user và message từ hệ thông Knox(hệ thống quản lý message của Samsung SDS)</li>
                <li>Tạo cảnh báo và phân loại message rồi gửi về cho Knox message cho user</li>
                <li>Tích hợp WebSocket để gửi message theo thời gian thực</li>
              </ul>
            </ul>
            <li style="font-weight: 600;">Application Monitoring System</li>
            <ul>
              <li>Tham gia phát triển tính năng và giao diện, fix bug của dự án</li>
              <ul>
                <li>Hợp tác cùng backend để tham gia phát triển tính năng</li>
                <li>Hệ thống giám sát Agent, Connection Account, Job (thực hiện batch tới Agent) của Department, System/SubSystem</li>
                <li>Phân Loại Job, tạo Schedule, quản lý agent, xuất chart hiện thị thông tin event đã xảy ra</li>
              </ul>
            </ul>
          </ul>
        </div>
        <div class="col-md-6" data-wow-delay="0.6s">
          <img
            src="../../../src/assets/images/project.jpg"
            class="img-responsive"
            alt="feature img"
            width="100%"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="css">
h2 {
  color: orange;
  font-size: 25px;
}
</style>
