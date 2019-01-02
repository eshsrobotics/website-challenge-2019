<template>
  <div class="cyberpatriots">
    <c-block :blockData="cypatBlock">
      <h2>About</h2>
      <p>Teams of around four members compete to improve the security of a computer. In other words, teams protect the computer from potential hackers or malicious programs. This includes securing local intranet networks, investigating suspicious software, or auditing security policies. During competition and training, groups run virtual images that represent operating systems. For example, participants must secure Windows 10, Windows 7, Windows 10 Server, Ubuntu 18, Ubuntu, 16, Fedora, and some other operating systems [VERIFY].</p>
      <p>Points are accumulated by fixing vulnerabilities or critical series. If a member happens to increase the vulnerability of the operating system, the team loses points. However, sometimes their points can be regained back during competition.</p>
      <p>You'll learn how to improve the security of various operating systems such as Windows 7, Windows 10, and variants of Linux, such as Ubuntu or Fedora. [VERIFY]. Some fixes are simple, such as enabling firewalls or managing users. Others are slightly more complex, such as configuring ports for applications to use, or auditing security policies.</p>
      <p>Meetings are held on Fridays.</p>
    </c-block>
  </div>
</template>

<script>
import CBlock from '@/components/ui/Block'

export default {
  name: 'cyberpatriots',
  data() {
    return {
      cypatBlock: {
        image: 'https://github.com/eshsrobotics/database-photos/blob/master/2017-2018/cyberpatriots-competition-prep/cyberPatriots2.jpg?raw=true',
        imageAltText: 'Brainstorming before competition',
        photoPosition: 'right'
      },
      quickLinks: [
        {
          "name": "Official Website",
          "url": "https://www.uscyberpatriot.org/",
          "desc": "Official CyberPatriots Website"
        }
      ]
    }
  },
  components: {
    'c-block': CBlock
  }
}
</script>
