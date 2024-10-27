<template>
  <header class="text-foreground dark">
    <div class="mx-auto flex max-w-[1350px] flex-row items-center py-2">
      <a
        href="/"
        class="lg:space-x1 hover:text-primary mr-4 flex items-center md:mr-2 lg:mr-6 xl:space-x-2"
      >
        <img
          class="h-10 w-10"
          width="1024"
          height="1024"
          src="https://www.altermmo.pl/wp-content/uploads/Logo-1.webp"
          alt=""
          srcset="
            https://www.altermmo.pl/wp-content/uploads/Logo-1-300x300.webp 300w,
            https://www.altermmo.pl/wp-content/uploads/Logo-1-600x600.webp 600w
          "
          sizes="(max-width: 1024px) 100vw, 1024px"
        />
        <span class="font-bold tracking-tight">AlterMMO</span>
      </a>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <Gamepad2 class="mr-2 h-4 w-4" />
              Gry
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul class="grid gap-3 p-6 lg:w-[900px] lg:grid-cols-3">
                <li class="row-span-4">
                  <NavigationMenuLink as-child>
                    <a
                      class="from-muted/50 to-muted hover:text-primary flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none focus:shadow-md"
                      href="#"
                    >
                      <MessageCircleQuestion class="h-12 w-12" />
                      <div class="mb-2 mt-4 text-lg font-medium">
                        Znajdź gre
                      </div>

                      <p
                        class="text-muted-foreground mb-2 text-sm leading-tight"
                      >
                        Szukasz czegoś pasującego do Twojego stylu gry?
                      </p>

                      <p class="text-muted-foreground text-sm leading-tight">
                        Krótki quiz pomoże Ci znaleźć grę która będzie pasować!
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>

                <li
                  v-for="game in games"
                  :key="game.title"
                >
                  <NavigationMenuLink as-child>
                    <a
                      :href="game.href"
                      class="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors"
                    >
                      <div
                        class="flex flex-row items-center justify-start gap-2 text-sm font-medium leading-none"
                      >
                        <img
                          class="h-8 w-8"
                          :src="game.image"
                          :alt="game.title"
                          width="540"
                          height="540"
                        />

                        {{ game.title }}
                      </div>
                      <p
                        class="text-muted-foreground line-clamp-4 text-sm leading-snug"
                      >
                        {{ game.description }}
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>

                <li class="col-span-2 col-start-2">
                  <Button
                    variant="outline"
                    class="w-full"
                  >
                    Zobacz wszystkie gry
                  </Button>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <UsersRound class="mr-2 h-4 w-4" />

              Społeczność
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul class="grid w-[400px] gap-3 p-4">
                <li
                  v-for="component in components"
                  :key="component.title"
                >
                  <NavigationMenuLink as-child>
                    <a
                      :href="component.href"
                      class="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors"
                    >
                      <div
                        class="flew-row flex items-center gap-2 text-sm font-medium leading-none"
                      >
                        <component :is="component.icon" />

                        {{ component.title }}
                      </div>
                      <p
                        class="text-muted-foreground line-clamp-3 text-sm leading-snug"
                      >
                        {{ component.description }}
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="#"
              :class="navigationMenuTriggerStyle()"
            >
              <CalendarDays class="mr-2 h-4 w-4" />
              Premiery
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="#"
              :class="navigationMenuTriggerStyle()"
            >
              <Patronite />

              Patronite
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div class="ml-auto flex gap-2">
        <div class="relative">
          <Search
            class="text-muted-foreground absolute bottom-0 left-2 top-0 m-auto size-4"
          />
          <Input
            placeholder="Szukaj..."
            class="focus-visible:-ring-offset-1 w-[300px] pl-8 focus-visible:ring-1"
          />
        </div>

        <Button variant="ghost">
          <User />
        </Button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
  import Patronite from "@/components/Patronite.vue"

  import { DiscordIcon, TwitchIcon, YouTubeIcon } from "vue3-simple-icons"

  import {
    MessageCircleQuestion,
    CalendarDays,
    Search,
    User,
    Gamepad2,
    UsersRound,
  } from "lucide-vue-next"

  import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"

  import { Input } from "@/components/ui/input"
  import { Button } from "@/components/ui/button"

  const games = [
    {
      href: "#",
      title: "Albion Online",
      image: "https://www.altermmo.pl/wp-content/uploads/Albion_Online.webp",
      description:
        "Sandboxowa gra fantasy, gdzie gracze rozwijają ekonomię, walczą o terytoria i budują własne imperia.",
    },
    {
      href: "#",
      title: "Ashes of Creation",
      image: "https://www.altermmo.pl/wp-content/uploads/AoC.webp",
      description:
        "Świat fantasy reagujący na działania graczy, kształtując miasta, gospodarkę i politykę.",
    },
    {
      href: "#",
      title: "Corepunk",
      image: "https://www.altermmo.pl/wp-content/uploads/Corepunk.webp",
      description:
        "Unikalna mieszanka cyberpunku i fantasy, oferująca eksplorację, walkę i rozwój postaci w świecie pełnym mgły wojny.",
    },
    {
      href: "#",
      title: "Lineage 2",
      image: "https://www.altermmo.pl/wp-content/uploads/Lineage2.webp",
      description:
        "Klasyka gatunku z epickimi bitwami, rozwijaniem klanów i walką o dominację.",
    },
    {
      href: "#",
      title: "Path of Exile 2",
      image: "https://www.altermmo.pl/wp-content/uploads/Path_Of_Exile2.webp",
      description:
        "Intensywna gra akcji z rozbudowanym systemem umiejętności i mrocznym światem do odkrycia.",
    },
    {
      href: "#",
      title: "World of Warcraft",
      image:
        "https://www.altermmo.pl/wp-content/uploads/World_Of_Warcraft.webp",
      description:
        "Kultowa gra z epickimi przygodami, rajdami i bogatym światem Azeroth do eksploracji.",
    },
  ]

  const components: {
    title: string
    href: string
    description: string
    icon: any
  }[] = [
    {
      href: "#",
      icon: DiscordIcon,
      title: "Discord",
      description:
        "Miejsce dla ludzi, którzy łączą gry, technologię i blockchain. Gramy, analizujemy różne produkcje online, żeby w przyszłości stworzyć coś swojego i innowacyjnego.",
    },
    {
      href: "#",
      icon: TwitchIcon,
      title: "Twitch",
      description:
        "Streamy o alternatywnej rzeczywistości, czyli o grach online, MMO oraz WEB3 gamingu.",
    },
    {
      href: "#",
      icon: YouTubeIcon,
      title: "YouTube",
      description:
        "Filmy i live streamy o grach MMO, MMORPG, online, multiplayer... O alternatywnej rzeczywistości.",
    },
  ]
</script>

<style scoped>
  button {
    border: none;
  }
</style>

<style>
  .page-content,
  .page-header,
  #conten,
  #content,
  #site-footer {
    margin-left: 0 !important;
  }
</style>
