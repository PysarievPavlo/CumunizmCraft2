import publicKey from './public.pem?raw';

export const window = {
    width: 900,
    height: 550,
    frame: false,
    resizable: false,
    maximizable: false,
    fullscreenable: false,
    title: 'CumUnizmCraft',
};

export const api = {
    ws: 'ws://cumunizmcraft.pp.ua:1370/ws',
    web: 'http://cumunizmcraft.pp.ua:1370',
    publicKey,
};

export const appPath = '.CumUnizmCraft-launcher';

export const discordRPC = {
    appId: '1214685301793103902',
    default: {
        firstLineText: 'В меню лаунчера',
        secondLineText: 'Чувак, ты думал здесь что-то будет?',
        buttons: [
            {
                label: 'Играть',
                url: 'https://www.youtube.com/',
            },
        ],
        largeImageKey: 'logo',
        smallImageKey: 'logo_mc',
        largeImageText: 'CumUnizmCraft',
        smallImageText: 'Minecraft',
    },
    profile: {
        firstLineText: 'Выбираю версию игры',
        secondLineText: 'Загружаю {server}',
        buttons: [
            {
                label: 'Играть',
                url: 'https://www.youtube.com/',
            },
        ],
        largeImageKey: 'logo',
        smallImageKey: 'logo_mc',
        largeImageText: 'luncher',
        smallImageText: 'Minecraft',
    },
    game: {
        firstLineText: 'Играю на сервере',
        secondLineText: 'Играю за {nickname}',
        buttons: [
            {
                label: 'Играть',
                url: 'https://www.youtube.com/',
            },
        ],
        largeImageKey: 'logo',
        smallImageKey: 'logo_mc',
        largeImageText: 'CumUnizmCraft',
        smallImageText: 'Minecraft',
    }
};
