import EventEmitter = require("events");

export type AvatarType = "headshot" | "avatarBust" | "avatarThumbnail";

export class Client extends EventEmitter {}

export interface UserConstructor {
  _cookie?: string;
  userId: number;
  username: string;
  displayName: string;
  hasPremium: boolean;
  banned: boolean;
  description: string;
}

export class User {
  private _cookie: string | null;
  private _previousNames: string[] | null;
  private _avatar: {
    headshot: string | null;
    avatarBust: string | null;
    avatarThumbnail: string | null;
  };
  public readonly userId: string | number;
  public readonly username: string;
  public readonly displayName: string | null;
  public readonly hasPremium: boolean;
  public readonly banned: boolean;
  public readonly description: string;
  public limitedAccess(): boolean;
  public avatarUrl(type: AvatarType): string;
  public previousNames(): string[] | null;
  public changeUsername(newUsername: string): string;
  public changeDescription(newDescription: string): string;
}

export interface Header {
  key: string;
  value: string;
}

export interface RequestOptions {
  baseUrl: string;
  inUrlParam1?: string;
  extendedUrl?: string;
  inUrlParam2?: string;
  headers?: Header[];
  cookie?: string;
}
