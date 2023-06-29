export default function html(url: string) {
  const color = {
    background: '#f9f9f9',
    text: '#444',
    mainBackground: '#fff',
    buttonBackground: '#0099ff',
    buttonBorder: '#0099ff',
    buttonText: '#fff',
  }

  return `<div style='margin:0;padding:0;margin-top: 36px;'>
      <body style='background: ${color.background};'>
        <table
          width='100%'
          border='0'
          cellspacing='20'
          cellpadding='0'
          style='background: ${color.mainBackground}; max-width: 600px; margin: auto; border-radius: 10px;box-shadow: 0 9px 20px #999;'
        >
          <tr valign='middle'>
            <td
              class='m_1836952094627996187padlr20m m_1836952094627996187mart30m'
              style='color:#a0a0a0;text-align:center;padding:10px 20px 10px 20px;border-bottom: 1px solid #ccc;'
            >
              <h1 style='text-align:center; font-size:36px;color:#000;margin: 0;'>فرادرس</h1>
            </td>
          </tr>
          <tr>
            <td
              align='center'
              style='padding: 10px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};'
            >
              سلام، برای ورود و تایید حساب کاربری روی لینک زیر کلیک کنید
            </td>
          </tr>
          <tr>
            <td align='center' style='padding: 20px 0;'>
              <table border='0' cellspacing='0' cellpadding='0'>
                <tr>
                  <td
                    align='center'
                    style='border-radius: 5px;'
                    bgcolor='${color.buttonBackground}'
                  >
                    <a
                      href='${url}'
                      target='_blank'
                      style='font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${color.buttonText}; text-decoration: none; border-radius: 5px; padding: 10px 20px; border: 1px solid ${color.buttonBorder}; display: inline-block; font-weight: bold;'
                    >
                      ورود به سیستم
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </div>`
}
