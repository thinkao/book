var config = {
  /*ip: 'http://111.160.252.86:8082',
  uploadURL: 'http://111.160.252.86:8082/tdsec-security-service/file/upload',
  fileUrl: '',
  webUrl: 'http://localhost:8091',*/
  pageSizes: [10, 15, 20, 30],
  pageSize: 10,
  /*fxdjOptions: [
    {
      value: '红',
      label: '红'
    },
    {
      value: '橙',
      label: '橙'
    },
    {
      value: '黄',
      label: '黄'
    },
    {
      value: '蓝',
      label: '蓝'
    }
  ],
  yljbOptions: [
    {
      value: '一级（企业级）',
      label: '一级（企业级）'
    },
    {
      value: '二级（县、市社区级）',
      label: '二级（县、市社区级）'
    },
    {
      value: '三级（地区市级）',
      label: '三级（地区市级）'
    },
    {
      value: '四级（省级）',
      label: '四级（省级）'
    },
    {
      value: '五级（区域级）',
      label: '五级（区域级）'
    },
    {
      value: '六级（国家级）',
      label: '六级（国家级）'
    }
  ],
  ylfsOptions: [
    {
      value: '桌面演练',
      label: '桌面演练'
    },
    {
      value: '功能演练',
      label: '功能演练'
    },
    {
      value: '全面演练',
      label: '全面演练'
    }
  ],
  chunk: function (arr, len) {
    len = parseInt(len)
    var groups = []
    if (len <= 1 || arr.length < len) {
      groups.push(arr)
      return groups
    }
    var loop = Math.ceil(arr.length / len)
    for (var i = 0; i < loop; i++) {
      groups.push(arr.slice(len * i, len * (i + 1)))
    }
    return groups
  },
  uuid: function (len, radix) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
    var uuid = []
    var i
    radix = radix || chars.length
    if (len) {
      // Compact form
      for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix]
    } else {
      // rfc4122, version 4 form
      var r

      // rfc4122 requires these characters
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
      uuid[14] = '4'

      // Fill in random data.  At i==19 set the high bits of clock sequence as
      // per rfc4122, sec. 4.1.5
      for (i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | Math.random() * 16
          uuid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r]
        }
      }
    }
    return uuid.join('')
  },
  getUrlParam: function (url, name) {
    var pattern = new RegExp('[?&]' + name + '=([^&]+)', 'g')
    var matcher = pattern.exec(url)
    var items = ''
    if (matcher !== null) {
      try {
        items = decodeURIComponent(decodeURIComponent(matcher[1]))
      } catch (e) {
        try {
          items = decodeURIComponent(matcher[1])
        } catch (e) {
          items = matcher[1]
        }
      }
    }
    return items
  },
  /!**
   * 获取当前月的第一天
   *!/
  getCurrentMonthFirst: function (dataValue) {
    var date = new Date()
    if (dataValue) {
      date = new Date(dataValue)
    }
    date.setDate(1)
    return date
  },
  /!**
   * 获取当前月的最后一天
   *!/
  getCurrentMonthLast: function (dataValue) {
    var date = new Date()
    if (dataValue) {
      date = new Date(dataValue)
    }
    var currentMonth = date.getMonth()
    var nextMonth = ++currentMonth
    var nextMonthFirstDay = new Date(date.getFullYear(), nextMonth, 1)
    return new Date(nextMonthFirstDay)
  },
  mimeTypes (name) {
    if (name === null) {
      return ''
    }
    console.log('name', name)
    let type = name.split('.').pop().toLowerCase()
    return {
      '323': 'text/h323',
      'acx': 'application/internet-property-stream',
      'ai': 'application/postscript',
      'aif': 'audio/x-aiff',
      'aifc': 'audio/x-aiff',
      'aiff': 'audio/x-aiff',
      'asf': 'video/x-ms-asf',
      'asr': 'video/x-ms-asf',
      'asx': 'video/x-ms-asf',
      'au': 'audio/basic',
      'avi': 'video/x-msvideo',
      'axs': 'application/olescript',
      'bas': 'text/plain',
      'bcpio': 'application/x-bcpio',
      'bin': 'application/octet-stream',
      'bmp': 'image/bmp',
      'c': 'text/plain',
      'cat': 'application/vnd.ms-pkiseccat',
      'cdf': 'application/x-cdf',
      'cer': 'application/x-x509-ca-cert',
      'class': 'application/octet-stream',
      'clp': 'application/x-msclip',
      'cmx': 'image/x-cmx',
      'cod': 'image/cis-cod',
      'cpio': 'application/x-cpio',
      'crd': 'application/x-mscardfile',
      'crl': 'application/pkix-crl',
      'crt': 'application/x-x509-ca-cert',
      'csh': 'application/x-csh',
      'css': 'text/css',
      'dcr': 'application/x-director',
      'der': 'application/x-x509-ca-cert',
      'dir': 'application/x-director',
      'dll': 'application/x-msdownload',
      'dms': 'application/octet-stream',
      'doc': 'application/msword',
      'dot': 'application/msword',
      'dvi': 'application/x-dvi',
      'dxr': 'application/x-director',
      'eps': 'application/postscript',
      'etx': 'text/x-setext',
      'evy': 'application/envoy',
      'exe': 'application/octet-stream',
      'fif': 'application/fractals',
      'flr': 'x-world/x-vrml',
      'gif': 'image/gif',
      'gtar': 'application/x-gtar',
      'gz': 'application/x-gzip',
      'h': 'text/plain',
      'hdf': 'application/x-hdf',
      'hlp': 'application/winhlp',
      'hqx': 'application/mac-binhex40',
      'hta': 'application/hta',
      'htc': 'text/x-component',
      'htm': 'text/html',
      'html': 'text/html',
      'htt': 'text/webviewhtml',
      'ico': 'image/x-icon',
      'ief': 'image/ief',
      'iii': 'application/x-iphone',
      'ins': 'application/x-internet-signup',
      'isp': 'application/x-internet-signup',
      'jfif': 'image/pipeg',
      'jpe': 'image/jpeg',
      'jpeg': 'image/jpeg',
      'jpg': 'image/jpeg',
      'js': 'application/x-javascript',
      'latex': 'application/x-latex',
      'lha': 'application/octet-stream',
      'lsf': 'video/x-la-asf',
      'lsx': 'video/x-la-asf',
      'lzh': 'application/octet-stream',
      'm13': 'application/x-msmediaview',
      'm14': 'application/x-msmediaview',
      'm3u': 'audio/x-mpegurl',
      'man': 'application/x-troff-man',
      'mdb': 'application/x-msaccess',
      'me': 'application/x-troff-me',
      'mht': 'message/rfc822',
      'mhtml': 'message/rfc822',
      'mid': 'audio/mid',
      'mny': 'application/x-msmoney',
      'mov': 'video/quicktime',
      'movie': 'video/x-sgi-movie',
      'mp2': 'video/mpeg',
      'mp3': 'audio/mpeg',
      'mpa': 'video/mpeg',
      'mpe': 'video/mpeg',
      'mpeg': 'video/mpeg',
      'mpg': 'video/mpeg',
      'mpp': 'application/vnd.ms-project',
      'mpv2': 'video/mpeg',
      'ms': 'application/x-troff-ms',
      'mvb': 'application/x-msmediaview',
      'nws': 'message/rfc822',
      'oda': 'application/oda',
      'p10': 'application/pkcs10',
      'p12': 'application/x-pkcs12',
      'p7b': 'application/x-pkcs7-certificates',
      'p7c': 'application/x-pkcs7-mime',
      'p7m': 'application/x-pkcs7-mime',
      'p7r': 'application/x-pkcs7-certreqresp',
      'p7s': 'application/x-pkcs7-signature',
      'pbm': 'image/x-portable-bitmap',
      'pdf': 'application/pdf',
      'pfx': 'application/x-pkcs12',
      'pgm': 'image/x-portable-graymap',
      'pko': 'application/ynd.ms-pkipko',
      'pma': 'application/x-perfmon',
      'pmc': 'application/x-perfmon',
      'pml': 'application/x-perfmon',
      'pmr': 'application/x-perfmon',
      'pmw': 'application/x-perfmon',
      'pnm': 'image/x-portable-anymap',
      'pot,': 'application/vnd.ms-powerpoint',
      'ppm': 'image/x-portable-pixmap',
      'pps': 'application/vnd.ms-powerpoint',
      'ppt': 'application/vnd.ms-powerpoint',
      'prf': 'application/pics-rules',
      'ps': 'application/postscript',
      'pub': 'application/x-mspublisher',
      'qt': 'video/quicktime',
      'ra': 'audio/x-pn-realaudio',
      'ram': 'audio/x-pn-realaudio',
      'ras': 'image/x-cmu-raster',
      'rgb': 'image/x-rgb',
      'rmi': 'audio/mid',
      'roff': 'application/x-troff',
      'rtf': 'application/rtf',
      'rtx': 'text/richtext',
      'scd': 'application/x-msschedule',
      'sct': 'text/scriptlet',
      'setpay': 'application/set-payment-initiation',
      'setreg': 'application/set-registration-initiation',
      'sh': 'application/x-sh',
      'shar': 'application/x-shar',
      'sit': 'application/x-stuffit',
      'snd': 'audio/basic',
      'spc': 'application/x-pkcs7-certificates',
      'spl': 'application/futuresplash',
      'src': 'application/x-wais-source',
      'sst': 'application/vnd.ms-pkicertstore',
      'stl': 'application/vnd.ms-pkistl',
      'stm': 'text/html',
      'svg': 'image/svg+xml',
      'sv4cpio': 'application/x-sv4cpio',
      'sv4crc': 'application/x-sv4crc',
      'swf': 'application/x-shockwave-flash',
      't': 'application/x-troff',
      'tar': 'application/x-tar',
      'tcl': 'application/x-tcl',
      'tex': 'application/x-tex',
      'texi': 'application/x-texinfo',
      'texinfo': 'application/x-texinfo',
      'tgz': 'application/x-compressed',
      'tif': 'image/tiff',
      'tiff': 'image/tiff',
      'tr': 'application/x-troff',
      'trm': 'application/x-msterminal',
      'tsv': 'text/tab-separated-values',
      'txt': 'text/plain',
      'uls': 'text/iuls',
      'ustar': 'application/x-ustar',
      'vcf': 'text/x-vcard',
      'vrml': 'x-world/x-vrml',
      'wav': 'audio/x-wav',
      'wcm': 'application/vnd.ms-works',
      'wdb': 'application/vnd.ms-works',
      'wks': 'application/vnd.ms-works',
      'wmf': 'application/x-msmetafile',
      'wps': 'application/vnd.ms-works',
      'wri': 'application/x-mswrite',
      'wrl': 'x-world/x-vrml',
      'wrz': 'x-world/x-vrml',
      'xaf': 'x-world/x-vrml',
      'xbm': 'image/x-xbitmap',
      'xla': 'application/vnd.ms-excel',
      'xlc': 'application/vnd.ms-excel',
      'xlm': 'application/vnd.ms-excel',
      'xls': 'application/vnd.ms-excel',
      'xlt': 'application/vnd.ms-excel',
      'xlw': 'application/vnd.ms-excel',
      'xof': 'x-world/x-vrml',
      'xpm': 'image/x-xpixmap',
      'xwd': 'image/x-xwindowdump',
      'z': 'application/x-compress',
      'zip': 'application/zip'
    }[type]
  },
  openWindow: function (name) {
    window.open('about:blank', name, 'height=400, width=400, top=0, left=0, toolbar=yes, menubar=yes, scrollbars=yes, resizable=yes,location=yes, status=yes')
  },
  openPostWindow: function (url, name, data = '') {
    var tempForm = document.createElement('form')
    tempForm.method = 'get'
    tempForm.action = url
    tempForm.target = name
    var hideInput = document.createElement('input')
    hideInput.type = 'hidden'
    hideInput.name = 'key' // 写死的要修改成通用的
    hideInput.value = data
    console.log('hideInput', data)
    tempForm.appendChild(hideInput)
    tempForm.addEventListener('onsubmit', function () { config.openWindow(name) })
    document.body.appendChild(tempForm)

    tempForm.submit()
    document.body.removeChild(tempForm)
  }*/
}
