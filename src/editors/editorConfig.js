// Editors
import Checkbox from './Checkbox'
import Code from './Code'
import Color from './Color'
import Image from './Image'
import Input from './Input'
import Markdown from './Markdown'
import Radio from './Radio'
import RichText from './RichText'
import Select from './Select'
import Textarea from './Textarea'
import Video from './Video'

// Previews
import ArrayPreview from './previews/Array'
import CodePreview from './previews/Code'
import ColorPreview from './previews/Color'
import ImagePreview from './previews/Image'
import OptionPreview from './previews/Option'
import TextPreview from './previews/Text'

export default [
  {
    'schemaName': 'checkbox',
    'editor': Checkbox,
    'preview': ArrayPreview,
  },
  {
    'schemaName': 'code',
    'editor': Code,
    'preview': CodePreview,
  },
  {
    'schemaName': 'color',
    'editor': Color,
    'preview': ColorPreview,
  },
  {
    'schemaName': 'image',
    'editor': Image,
    'preview': ImagePreview,
  },
  {
    'schemaName': 'input',
    'editor': Input,
    'preview': TextPreview,
  },
  {
    'schemaName': 'markdown',
    'editor': Markdown,
    'preview': TextPreview,
  },
  {
    'schemaName': 'radio',
    'editor': Radio,
    'preview': OptionPreview,
  },
  {
    'schemaName': 'rich-text',
    'editor': RichText,
    'preview': TextPreview,
  },
  {
    'schemaName': 'select',
    'editor': Select,
    'preview': OptionPreview,
  },
  {
    'schemaName': 'textarea',
    'editor': Textarea,
    'preview': TextPreview,
  },
  {
    'schemaName': 'video',
    'editor': Video,
    'preview': ImagePreview,
  },
]
