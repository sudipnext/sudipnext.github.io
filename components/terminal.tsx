"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Maximize2, Minimize2, TerminalIcon, X } from "lucide-react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  createFileSystem,
  type FileSystem,
  formatPath,
  getDirectoryContents,
  getNodeAtPath,
  resolvePath,
} from "@/lib/terminal-fs"

type TerminalHistory = {
  command: string
  output: React.ReactNode
}

type TerminalMode = "portfolio" | "bash"

export function Terminal() {
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<TerminalHistory[]>([
    {
      command: "",
      output: (
        <div className="text-green-500">
          <p>
            Welcome to sudipnext terminal! Type <span className="text-yellow-500">help</span> to see available commands.
          </p>
          <p className="text-xs text-muted-foreground mt-1">v1.0.0</p>
        </div>
      ),
    },
  ])
  const [isOpen, setIsOpen] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [mode, setMode] = useState<TerminalMode>("portfolio")
  const [fileSystem, setFileSystem] = useState<FileSystem>(createFileSystem())

  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  // Handle portfolio mode commands
  const handlePortfolioCommand = (command: string): React.ReactNode => {
    switch (command) {
      case "help":
        return (
          <div className="space-y-1">
            <p className="text-yellow-500">Available commands:</p>
            {Object.entries(siteConfig.terminalCommands).map(([cmd, desc]) => (
              <div key={cmd} className="grid grid-cols-12 gap-2">
                <span className="col-span-2 text-green-500">{cmd}</span>
                <span className="col-span-10 text-muted-foreground">{desc}</span>
              </div>
            ))}
            <div className="grid grid-cols-12 gap-2 mt-2">
              <span className="col-span-2 text-green-500">bash</span>
              <span className="col-span-10 text-muted-foreground">Switch to bash mode</span>
            </div>
          </div>
        )

      case "about":
        return (
          <div>
            <p className="text-yellow-500">About Me:</p>
            <p className="text-muted-foreground mt-1">{siteConfig.description}</p>
          </div>
        )

      case "skills":
        return (
          <div className="space-y-2">
            <p className="text-yellow-500">My Skills:</p>

            <div>
              <p className="text-green-500">Languages:</p>
              <p className="text-muted-foreground">{siteConfig.skills?.languages?.join(", ") || "Not specified"}</p>
            </div>

            <div>
              <p className="text-green-500">Frameworks:</p>
              <p className="text-muted-foreground">{siteConfig.skills?.frameworks?.join(", ") || "Not specified"}</p>
            </div>

            <div>
              <p className="text-green-500">Data Science:</p>
              <p className="text-muted-foreground">{siteConfig.skills?.datascience?.join(", ") || "Not specified"}</p>
            </div>

            <div>
              <p className="text-green-500">Web Scraping:</p>
              <p className="text-muted-foreground">{siteConfig.skills?.scraping?.join(", ") || "Not specified"}</p>
            </div>
          </div>
        )

      case "contact":
        return (
          <div className="space-y-1">
            <p className="text-yellow-500">Contact Information:</p>
            {siteConfig.socials.map((social) => (
              <div key={social.name} className="flex items-center gap-2">
                <social.icon className="h-4 w-4 text-green-500" />
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  {social.name}
                </a>
              </div>
            ))}
          </div>
        )

      case "projects":
        router.push("/projects")
        return <p className="text-green-500">Navigating to projects page...</p>

      case "blog":
        router.push("https://blog.parajulisudip.com.np")
        return <p className="text-green-500">Navigating to blog page...</p>

      case "medium":
        router.push("https://medium.com/@sudipnext")
        return <p className="text-green-500">Navigating to Medium page...</p>

        

      case "cv":
        router.push("/cv")
        return <p className="text-green-500">Navigating to CV page...</p>

      case "clear":
        setHistory([])
        return null

      case "bash":
        setMode("bash")
        return (
          <div>
            <p className="text-green-500">Switching to bash mode...</p>
            <p className="text-muted-foreground mt-1">
              Type <span className="text-yellow-500">exit</span> to return to portfolio mode.
            </p>
          </div>
        )

      default:
        return (
          <p className="text-red-500">
            Command not found: {command}. Type <span className="text-yellow-500">help</span> to see available commands.
          </p>
        )
    }
  }

  // Handle bash mode commands
  const handleBashCommand = (commandLine: string): React.ReactNode => {
    const args = commandLine.trim().split(/\s+/)
    const command = args[0]

    if (!command) return null

    switch (command) {
      case "help":
        return (
          <div className="space-y-1">
            <p className="text-yellow-500">Available bash commands:</p>
            <div className="grid grid-cols-12 gap-2">
              <span className="col-span-2 text-green-500">ls</span>
              <span className="col-span-10 text-muted-foreground">List directory contents</span>
            </div>
            <div className="grid grid-cols-12 gap-2">
              <span className="col-span-2 text-green-500">cd</span>
              <span className="col-span-10 text-muted-foreground">Change directory</span>
            </div>
            <div className="grid grid-cols-12 gap-2">
              <span className="col-span-2 text-green-500">pwd</span>
              <span className="col-span-10 text-muted-foreground">Print working directory</span>
            </div>
            <div className="grid grid-cols-12 gap-2">
              <span className="col-span-2 text-green-500">cat</span>
              <span className="col-span-10 text-muted-foreground">Display file contents</span>
            </div>
            <div className="grid grid-cols-12 gap-2">
              <span className="col-span-2 text-green-500">clear</span>
              <span className="col-span-10 text-muted-foreground">Clear the terminal screen</span>
            </div>
            <div className="grid grid-cols-12 gap-2">
              <span className="col-span-2 text-green-500">exit</span>
              <span className="col-span-10 text-muted-foreground">Exit bash mode</span>
            </div>
          </div>
        )

      case "ls":
        const lsPath = args.length > 1 ? resolvePath(fileSystem, args[1]) : fileSystem.currentPath
        const contents = getDirectoryContents(fileSystem, lsPath)

        if (contents.length === 0) {
          return <p className="text-red-500">No such directory or empty directory</p>
        }

        const showDetails = args.includes("-l") || args.includes("-la") || args.includes("-al")

        if (showDetails) {
          return (
            <div className="font-mono">
              <p className="text-muted-foreground">total {contents.length}</p>
              {contents.map((item) => (
                <div key={item.name} className="grid grid-cols-12 gap-2">
                  <span className="col-span-1 text-muted-foreground">
                    {item.type === "directory" ? "d" : "-"}rw-r--r--
                  </span>
                  <span className="col-span-1 text-muted-foreground">sudip</span>
                  <span className="col-span-1 text-muted-foreground">users</span>
                  <span className="col-span-1 text-muted-foreground">0</span>
                  <span className="col-span-2 text-muted-foreground">Apr 29 12:00</span>
                  <span className={`col-span-6 ${item.type === "directory" ? "text-blue-400" : "text-white"}`}>
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          )
        } else {
          return (
            <div className="flex flex-wrap gap-4 font-mono">
              {contents.map((item) => (
                <span key={item.name} className={item.type === "directory" ? "text-blue-400" : "text-white"}>
                  {item.name}
                </span>
              ))}
            </div>
          )
        }

      case "cd":
        if (args.length === 1) {
          // cd with no args goes to home directory
          const homePath = ["home", "sudipnext"]
          setFileSystem((prev) => ({ ...prev, currentPath: homePath }))
          return <p className="text-green-500">Changed directory to {formatPath(homePath)}</p>
        }

        const cdPath = resolvePath(fileSystem, args[1])
        const cdNode = getNodeAtPath(fileSystem, cdPath)

        if (!cdNode) {
          return <p className="text-red-500">No such directory: {args[1]}</p>
        }

        if (cdNode.type !== "directory") {
          return <p className="text-red-500">Not a directory: {args[1]}</p>
        }

        setFileSystem((prev) => ({ ...prev, currentPath: cdPath }))
        return <p className="text-green-500">Changed directory to {formatPath(cdPath)}</p>

      case "pwd":
        return <p className="text-white">{formatPath(fileSystem.currentPath)}</p>

      case "cat":
        if (args.length < 2) {
          return <p className="text-red-500">Usage: cat [file]</p>
        }

        const catPath = resolvePath(fileSystem, args[1])
        const catNode = getNodeAtPath(fileSystem, catPath)

        if (!catNode) {
          return <p className="text-red-500">No such file: {args[1]}</p>
        }

        if (catNode.type !== "file") {
          return <p className="text-red-500">Not a file: {args[1]}</p>
        }

        // Format the content based on file extension
        const extension = catNode.name.split(".").pop()?.toLowerCase()

        if (extension === "md") {
          return (
            <div className="text-white whitespace-pre-wrap markdown-content">
              {catNode.content?.split("\n").map((line, i) => {
                if (line.startsWith("# ")) {
                  return (
                    <h1 key={i} className="text-xl font-bold text-yellow-500">
                      {line.substring(2)}
                    </h1>
                  )
                } else if (line.startsWith("## ")) {
                  return (
                    <h2 key={i} className="text-lg font-semibold text-yellow-400 mt-2">
                      {line.substring(3)}
                    </h2>
                  )
                } else if (line.startsWith("```")) {
                  return (
                    <div key={i} className="bg-gray-800 p-2 rounded my-2 font-mono text-green-300">
                      {line}
                    </div>
                  )
                } else {
                  return <div key={i}>{line}</div>
                }
              })}
            </div>
          )
        } else if (extension === "json") {
          try {
            const jsonContent = JSON.parse(catNode.content || "{}")
            return (
              <pre className="text-white whitespace-pre-wrap overflow-x-auto">
                {JSON.stringify(jsonContent, null, 2)}
              </pre>
            )
          } catch (e) {
            return <p className="text-red-500">Error parsing JSON: {String(e)}</p>
          }
        } else {
          return <pre className="text-white whitespace-pre-wrap">{catNode.content}</pre>
        }

      case "clear":
        setHistory([])
        return null

      case "exit":
        setMode("portfolio")
        return <p className="text-green-500">Exiting bash mode...</p>

      default:
        return (
          <p className="text-red-500">
            Command not found: {command}. Type <span className="text-yellow-500">help</span> to see available commands.
          </p>
        )
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!input.trim()) return

    const command = input.trim()
    let output: React.ReactNode

    // Process commands based on mode
    if (mode === "portfolio") {
      output = handlePortfolioCommand(command.toLowerCase())
    } else {
      output = handleBashCommand(command)
    }

    if (command !== "clear") {
      setHistory((prev) => [...prev, { command: input, output }])
    }

    setInput("")
  }

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 bg-primary text-primary-foreground p-2 rounded-md shadow-lg hover:bg-primary/90 transition-all"
        aria-label="Toggle Terminal"
      >
        <TerminalIcon className="h-5 w-5" />
      </button>

      <div
        className={cn(
          "fixed z-40 bg-black/90 border-t border-green-500/30 transition-all duration-300 ease-in-out",
          isFullscreen ? "inset-0 h-screen" : "bottom-0 left-0 right-0",
          isOpen ? (isFullscreen ? "h-screen" : "h-80") : "h-0",
        )}
      >
        {isOpen && (
          <div className="flex flex-col h-full" onClick={focusInput}>
            <div className="flex items-center justify-between p-2 border-b border-green-500/30">
              <div className="flex items-center gap-2">
                <div className="text-green-500 text-sm font-mono">
                  {mode === "bash"
                    ? `sudipnext@portfolio:${formatPath(fileSystem.currentPath)}$`
                    : "sudipnext@portfolio:~$"}
                </div>
                <Badge className="text-xs py-0.5 px-1.5 bg-green-900/50 text-green-400 border border-green-500/30">
                  {mode === "bash" ? "BASH MODE" : "PORTFOLIO MODE"}
                </Badge>
              </div>
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 text-gray-400 hover:text-white"
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleFullscreen()
                  }}
                  aria-label={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                >
                  {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 text-gray-400 hover:text-white"
                  onClick={(e) => {
                    e.stopPropagation()
                    setIsOpen(false)
                  }}
                  aria-label="Close Terminal"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div
              ref={terminalRef}
              className="flex-1 p-4 font-mono text-sm overflow-y-auto scrollbar-thin scrollbar-thumb-green-500/30 scrollbar-track-transparent"
            >
              {history.map((item, index) => (
                <div key={index} className="mb-2">
                  {item.command && (
                    <div className="flex">
                      <span className="text-green-500 mr-2">$</span>
                      <span className="text-white">{item.command}</span>
                    </div>
                  )}
                  <div className="ml-4 mt-1">{item.output}</div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="p-2 border-t border-green-500/30 flex items-center">
              <span className="text-green-500 mr-2">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-white font-mono"
                autoFocus
                aria-label="Terminal input"
              />
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
