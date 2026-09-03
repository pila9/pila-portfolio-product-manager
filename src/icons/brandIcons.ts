import { h, type FunctionalComponent } from 'vue'
import { Icon } from '@iconify/vue'

/**
 * Creates a Vue functional component that renders an Iconify SVG
 * with optional default inline styles or Tailwind classes.
 */
const createBrandIcon = (
  iconName: string,
  defaultColor?: string
): FunctionalComponent<{ class?: string; style?: Record<string, string> }> => {
  return (props, { attrs }) => {
    const style = defaultColor
      ? { color: defaultColor, ...props.style }
      : props.style

    return h(Icon, {
      icon: iconName,
      class: props.class,
      style,
      ...attrs,
    })
  }
}

// Social Brand Icons
export const GitHub = createBrandIcon('simple-icons:github', '#181717')
export const LinkedIn = createBrandIcon('simple-icons:linkedin', '#0A66C2')
export const Telegram = createBrandIcon('simple-icons:telegram', '#26A5E4')
export const Twitter = createBrandIcon('simple-icons:x', '#000000')

// Frontend & JS Logos
export const ReactIcon = createBrandIcon('simple-icons:react', '#61DAFB')
export const VueIcon = createBrandIcon('simple-icons:vuedotjs', '#4FC08D')
export const NuxtIcon = createBrandIcon('simple-icons:nuxtdotjs', '#00DC82')
export const JavaScriptIcon = createBrandIcon('simple-icons:javascript', '#F7DF1E')
export const TypeScriptIcon = createBrandIcon('simple-icons:typescript', '#3178C6')

// UI Framework Logos
export const TailwindIcon = createBrandIcon('simple-icons:tailwindcss', '#06B6D4')
export const VuetifyIcon = createBrandIcon('simple-icons:vuetify', '#1867C0')
export const ElementIcon = createBrandIcon('simple-icons:element', '#409EFF')
export const MuiIcon = createBrandIcon('simple-icons:mui', '#007FFF')
export const BootstrapIcon = createBrandIcon('simple-icons:bootstrap', '#7952B3')

// Backend & Server Logos
export const PhpIcon = createBrandIcon('simple-icons:php', '#777BB4')
export const LaravelIcon = createBrandIcon('simple-icons:laravel', '#FF2D20')
export const NodeIcon = createBrandIcon('simple-icons:nodedotjs', '#5FA04E')
export const CSharpIcon = createBrandIcon('simple-icons:csharp', '#512BD4')
export const DotNetIcon = createBrandIcon('simple-icons:dotnet', '#512BD4')

// DevOps & Tools Logos
export const JiraIcon = createBrandIcon('simple-icons:jira', '#0052CC')
export const GitLabIcon = createBrandIcon('simple-icons:gitlab', '#FC6D26')
export const DockerIcon = createBrandIcon('simple-icons:docker', '#2496ED')
export const NginxIcon = createBrandIcon('simple-icons:nginx', '#009639')

// Databases Logos
export const MySqlIcon = createBrandIcon('simple-icons:mysql', '#4479A1')
export const SqlServerIcon = createBrandIcon('simple-icons:microsoftsqlserver', '#CC292B')

// Messaging Services
export const PusherIcon = createBrandIcon('simple-icons:pusher', '#300D4F')

// AI Tools Logos
export const ChatGptIcon = createBrandIcon('simple-icons:openai', '#10A37F')
export const CopilotIcon = createBrandIcon('simple-icons:githubcopilot', '#000000')
export const ClaudeIcon = createBrandIcon('simple-icons:anthropic', '#D97757')
export const GeminiIcon = createBrandIcon('simple-icons:googlegemini', '#8E75FF')
export const KiloCodeIcon = createBrandIcon('fluent-mdl2:code', '#0078D4')
export const CodexIcon = createBrandIcon('simple-icons:openai', '#10A37F')
export const PerplexityIcon = createBrandIcon('simple-icons:perplexity', '#1FB8A8')
export const StitchIcon = createBrandIcon('lucide:sparkles', '#8B5CF6')