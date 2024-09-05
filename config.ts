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
    appId: '1281369735535132763',
    default: {
        firstLineText: 'В меню лаунчера',
        secondLineText: 'Люблю Маму <3<3',
        buttons: [
            {
                label: 'Играть',
                url: 'http://cumunizmcraft.pp.ua/',
            },
        ],
        largeImageKey: '512',
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
                url: 'http://cumunizmcraft.pp.ua/',
            },
        ],
        largeImageKey: '512',
        smallImageKey: 'logo_mc',
        largeImageText: 'CumUnizmCraft',
        smallImageText: 'Minecraft',
    },
    game: {
        firstLineText: 'Играю на сервере',
        secondLineText: 'Играю за {nickname}',
        buttons: [
            {
                label: 'Играть',
                url: 'http://cumunizmcraft.pp.ua/',
            },
        ],
        largeImageKey: '512',
        smallImageKey: 'logo_mc',
        largeImageText: 'CumUnizmCraft',
        smallImageText: 'Minecraft',
    }
};
