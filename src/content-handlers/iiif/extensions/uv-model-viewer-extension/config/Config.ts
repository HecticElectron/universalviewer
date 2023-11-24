import {
  BaseConfig,
  CenterPanelContent,
  CenterPanelOptions,
  DownloadDialogueContent,
  DownloadDialogueOptions,
  ModuleConfig,
  ShareDialogueContent,
  ShareDialogueOptions,
} from "@/content-handlers/iiif/BaseConfig";

type ModelViewerCenterPanelOptions = CenterPanelOptions & {
  autoRotateEnabled: boolean;
  cameraChangeDelay: number;
  doubleClickAnnotationEnabled: boolean;
  interactionPromptEnabled: boolean;
};

type ModelViewerCenterPanelContent = CenterPanelContent & {};

type ModelViewerCenterPanel = {
  options: ModelViewerCenterPanelOptions;
  content: ModelViewerCenterPanelContent;
};

type ModelViewerDownloadDialogueOptions = DownloadDialogueOptions & {};

type ModelViewerDownloadDialogueContent = DownloadDialogueContent & {};

type ModelViewerDownloadDialogue = ModuleConfig & {
  options: ModelViewerDownloadDialogueOptions;
  content: ModelViewerDownloadDialogueContent;
};

type ModelViewerShareDialogueOptions = ShareDialogueOptions & {};

type ModelViewerShareDialogueContent = ShareDialogueContent & {};

type ModelViewerShareDialogue = ModuleConfig & {
  options: ModelViewerShareDialogueOptions;
  content: ModelViewerShareDialogueContent;
};

type ModelViewerSettingsDialogueOptions = ShareDialogueOptions & {};

type ModelViewerSettingsDialogueContent = ShareDialogueContent & {};

type ModelViewerSettingsDialogue = ModuleConfig & {
  options: ModelViewerSettingsDialogueOptions;
  content: ModelViewerSettingsDialogueContent;
};

type Modules = {
  modelViewerCenterPanel: ModelViewerCenterPanel;
  downloadDialogue: ModelViewerDownloadDialogue;
  shareDialogue: ModelViewerShareDialogue;
  settingsDialogue: ModelViewerSettingsDialogue;
};

export type Config = BaseConfig & {
  modules: Modules;
};
