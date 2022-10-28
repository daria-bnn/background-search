# Приложение для поиска фотографий

- ### Приложение доступно по [ссылке](https://daria-bnn.github.io/background-search/)

## Описание

- Приложение использует официальный [Unsplash API](https://unsplash.com/developers)
- Часть интерфейса состоит из поисковой строки, в которую следует вводить слова (по умолчанию на англ.) и кнопки по которой отправляется запрос и при успешном выполении, которого, ниже поискового бара будут отображены картинки определенной тематики (отображающие суть введенного слова).
- Интерфейс также позволяет выбрать и установить фоном для страницы любую из полученных картинок.
- Также есть возможности при помощи кнопки скрыть/отобразить галлерею с найденными картинками.

## Технологии

> - React
> - TypeScript
> - Redux, Redux Toolkit
> - CSS (БЭМ)

## Библиотеки

> - [React Photo Album](https://react-photo-album.com/) (для создания альбома фотографий)
> - [React Spinners](https://mhnpd.github.io/react-loader-spinner/docs/intro)
> - [bem-react-classname](https://github.com/bem/bem-react)

## Особенности
Деплой на [GitHub Pages](https://pages.github.com/) с использованием инструментов CI/CD (GitHub Actions Workflow)

## Как запустить проект

- Клонировать репозиторий и перейти в него в командной строке.

```Bash
git clone <url-адрес репозитория на GitHub>

cd <название папки>
```

- Установить зависимости из файла package.json:

```Bash
npm i
```

- Для корректной работы приложения необходимо иметь API-key сервиса [Unplash](https://unsplash.com/) (получить свой уникальный ключ можно пройдя регистрацию [здесь](https://unsplash.com/developers)).
- Полученный API-key необходимо записать в поле 'REACT_APP_UNPLASH_API_KEY=' в созданный заранее файл .env

- Запуск проекта:

```Bash
npm start
```

Разработчик [Дарья](https://github.com/daria-bnn?tab=repositories)
