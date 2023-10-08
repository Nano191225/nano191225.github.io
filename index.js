const links = [
    {
        text: "Unknownへ訪れる",
        url: "https://discord.gg/QF3n85dr4P",
        blank: true
    },
    {
        text: "Unknown公式サイト",
        url: "https://un-known.xyz/",
        blank: true
    },
    {
        text: "X",
        url: "https://twitter.com/Nano191225",
        blank: true
    },
    {
        text: "YouTube",
        url: "https://www.youtube.com/@Nano_1225",
        blank: true
    },
    {
        text: "GitHub",
        url: "https://github.com/Nano191225",
        blank: true
    },
    {
        text: "クラフターズコロニー",
        url: "https://minecraft-mcworld.com/author/c9d054750653568175df4da764fba2df901c5dc1/",
        blank: true
    },
    {
        text: "受託開発",
        url: "/jobs",
        blank: false
    },
]

$(function() {
    links.forEach(link => {
        $("#links").append(`<a href="${link.url}" ${link.blank ? 'target="_blank"' : ''}>${link.text}</a>`)
    })
})