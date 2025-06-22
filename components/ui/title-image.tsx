import { FC } from "react"

interface TitleImageProps {
  title: string
  className?: string
}

const TitleImage: FC<TitleImageProps> = ({ title, className }) => {
  // Generate a consistent but random-looking color based on the title
  const getColor = (str: string) => {
    let hash = 0
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash)
    }
    
    // Select from a palette of nice colors
    const colors = [
      "#3B82F6", // blue
      "#10B981", // green
      "#8B5CF6", // purple
      "#EC4899", // pink
      "#F59E0B", // amber
      "#6366F1", // indigo
    ]
    
    return colors[Math.abs(hash) % colors.length]
  }

  // Get first letter of each word for the initials
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .slice(0, 2)
      .toUpperCase()
  }

  const bgColor = getColor(title)
  const initials = getInitials(title)

  return (
    <div 
      className={`flex items-center justify-center w-full h-full aspect-video rounded-t-lg ${className}`}
      style={{ 
        backgroundColor: bgColor,
        backgroundImage: `radial-gradient(circle at 50% 0%, ${bgColor}99, ${bgColor}66)`,
      }}
    >
      <div className="relative flex flex-col items-center">
        <span className="text-4xl font-bold text-white opacity-30 absolute -top-10">{initials}</span>
        <h3 className="text-xl md:text-2xl font-bold text-white text-center px-6 max-w-[90%]">
          {title}
        </h3>
      </div>
    </div>
  )
}

export default TitleImage