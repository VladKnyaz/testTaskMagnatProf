import { ICity } from "@/shared/types/city";

export const fetchCities = async (): Promise<ICity[]> => {
    return await new Promise((resolve) =>
        setTimeout(
            () =>
                resolve(
                    [
                        {
                            id: 1,
                            name: 'Москва',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod dolor id metus fermentum, vel suscipit purus.',
                            images: ['/images/moscow1.jpg'],
                        },
                        {
                            id: 2,
                            name: 'Санкт-Петербург',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac felis vel neque hendrerit tincidunt.Lorem ipsum dolor sit amet consectetur. Elementum donec a accumsan egestas et non diam nunc. Semper aenean pharetra sit morbi. Est sed enim ut commodo adipiscing curabitur elementum tristique vel. Felis cras nisi et blandit. Vitae aliquam interdum aliquam ac senectus sit non erat. Euismod eu non id fermentum urna nunc scelerisque cursus vel. Phasellus ullamcorper congue ac tortor quam in mauris. Aliquam suspendisse erat dictumst libero. Commodo facilisis accumsan mattis pellentesque turpis nibh. Amet aliquam volutpat dictum risus nulla rhoncus arcu turpis tellus. Cursus feugiat quam arcu leo purus suspendisse cursus risus quis. Massa lobortis dolor a cras diam. Mi purus volutpat pulvinar accumsan dolor ultricies. Ipsum cursus proin mauris in. Bibendum amet ultrices faucibus tellus mauris magna. Eget leo sed aliquam eget tempus eget viverra tincidunt sit. Tortor non elit felis cras cras mi eget. Ut aliquet nibh eu at. Laoreet tincidunt porttitor tellus tristique.',
                            images: ['/images/spb1.jpg'],
                        },
                        {
                            id: 3,
                            name: 'Казань',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque et nisi cursus convallis.',
                            images: ['/images/kazan1.jpg'],
                        },
                        {
                            id: 4,
                            name: 'Новосибирск',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin ligula nec sem tincidunt, sit amet lacinia risus cursus.',
                            images: ['/images/novosibirsk1.jpg'],
                        },
                        {
                            id: 5,
                            name: 'Екатеринбург',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor augue vel erat laoreet, non vulputate mauris faucibus.',
                            images: ['/images/yekaterinburg1.jpg'],
                        },
                        {
                            id: 6,
                            name: 'Нижний Новгород',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat neque nec lorem sollicitudin, sed scelerisque dolor venenatis.',
                            images: ['/images/nizhny_novgorod1.jpg'],
                        },
                        {
                            id: 7,
                            name: 'Ростов-на-Дону',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Aliquam erat volutpat.',
                            images: ['/images/rostov1.jpg'],
                        },
                        {
                            id: 8,
                            name: 'Воронеж',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet ex at justo tempor laoreet ac eget augue.',
                            images: ['/images/voronezh1.jpg'],
                        },
                        {
                            id: 9,
                            name: 'Сочи',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at nulla tincidunt, tristique eros in, auctor metus.',
                            images: ['/images/sochi1.jpg'],
                        },
                        {
                            id: 10,
                            name: 'Калининград',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor diam ac nisi auctor, nec tempus ipsum convallis.',
                            images: ['/images/kaliningrad1.jpg'],
                        }
                    ]
                ),
            1000
        )
    );
};