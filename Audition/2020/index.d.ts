/**
 * PluginSupport has various utility helper functions useful for runtime diagnosis of issues reported to the user from the plugin layer.
 */
declare class PluginSupport {
	/**
	 * 
	 * @param  The date and time when the event occurred
	 */
	static eventDateTime(: number): string;

	/**
	 * 
	 * @param  The description of the event - may be empty for some events
	 */
	static eventDescription(: number): string;

	/**
	 * 
	 * @param  The title of the event
	 */
	static eventTitle(: number): string;

	/**
	 * 
	 * @param  The type of event - 1=Informational 2=Warning 3=Error
	 */
	static eventType(: number): number;

	/**
	 * Total Events available in Events panel
	 */
	static eventsCount(): number;

}

/**
 * The Metadata class provides access to document metadata
 */
declare class Metadata {
	/**
	 * XMP metatdata string of the according document
	 */
	xmp: string;

}

/**
 * DynamicLink provides access to DynamicLink objects.
 */
declare class DynamicLink {
	/**
	 * AMEServer object identifier
	 */
	static readonly AMEServer: string;

	/**
	 * 
	 * @param name Create connection to the named DynaicLink object Create Connection.
	 */
	static createConnection(name: string): object;

}

/**
 * An event to inform about connection status changes
 */
declare class DynamicLinkConnectionEvent {
	/**
	 * An event with this type is propagated if the connection state to a DynamikLink server object has changed
	 * Connection state to DynamikLink server object changed event type
	 */
	static readonly EVENT_CONNECTION: string;

	/**
	 * Return connection status.
	 */
	readonly isConnected: boolean;

	/**
	 * Return server name.
	 */
	readonly serverName: string;

}

/**
 * UIControl event object
 */
declare class UIControlEvent {
	/**
	 * A UI control is about to change its value.
	 */
	static readonly EVENT_VALUE_CHANGED: string;

	/**
	 * Absolut path to UI control.
	 */
	readonly ctrlPath: string;

	/**
	 * Node ID of UI control.
	 */
	readonly nodeID: string;

}

/**
 * Parameter to save a MultitrackDocument.
 */
declare class MultitrackSaveParameter {
	/**
	 * Copy referenced documents.
	 */
	copyReferencedDocuments: boolean;

	/**
	 * 
	 * @param copyReferencedDocuments Create a new instance.
	 */
	constructor(copyReferencedDocuments: boolean);

}

/**
 * Parameter to save a MultitrackDocument to a new file.
 */
declare class MultitrackSaveAsParameter {
	/**
	 * Copy referenced documents.
	 */
	copyReferencedDocuments: boolean;

	/**
	 * Include metadata and marker on save as.
	 */
	includeMetadata: boolean;

	/**
	 * 
	 * @param includeMetadata Create a new instance.
	 */
	constructor(copyReferencedDocuments: boolean, includeMetadata: boolean);

}

/**
 * Parameter to specify how to trim referenced files of a MultitrackDocument
 */
declare class MultitrackReferencedDocumentsTrimParameter {
	/**
	 * Trim handle length.
	 */
	handleLength: number;

	/**
	 * 
	 * @param handleLength Create a new instance.
	 */
	constructor(handleLength: number);

}

/**
 * Parameter to specify how to copy referenced files of a MUltitrackDocument.
 */
declare class MultitrackReferencedDocumentsCopyParameter {
	/**
	 * Export parameter to specify file- and sampletype format of exported audio files. If not set then keep the original format.
	 */
	exportParams: object;

	/**
	 * Include video files on export.
	 */
	includeVideo: boolean;

	/**
	 * Overwrite existing files.
	 */
	overwriteFiles: boolean;

	/**
	 * Trim Parameter. If set then audio files are trimmed to related clip length.
	 */
	trim: object;

	/**
	 * 
	 * @param exportParams Create a new instance.
	 */
	constructor(overwriteFiles: boolean, includeVideo: boolean, trim: MultitrackReferencedDocumentsTrimParameter, exportParams: WaveDocumentExportParameters);

}

/**
 * Parameter to export a MultitrackDocument.
 */
declare class MultitrackExportParameter {
	/**
	 * Copy referenced documents.
	 */
	copyReferencedDocuments: boolean;

	/**
	 * Parameter for export referenced documents.
	 */
	copyReferencedDocumentsParams: object;

	/**
	 * Include metadata and marker on save as.
	 */
	includeMetadata: boolean;

	/**
	 * 
	 * @param copyReferencedDocumentsParams Create a new instance.
	 */
	constructor(copyReferencedDocuments: boolean, includeMetadata: boolean, copyReferencedDocumentsParams: MultitrackReferencedDocumentsCopyParameter);

}

/**
 * Parameter to export as template.
 */
declare class MultitrackExportAsTemplateParameter {
	/**
	 * Include metadata and marker into template.
	 */
	includeMetadata: boolean;

	/**
	 * Overwrite existing files.
	 */
	overwriteFiles: boolean;

	/**
	 * 
	 * @param includeMetadata Create a new instance.
	 */
	constructor(includeMetadata: boolean);

}

/**
 * An object that represents a particular multitrack document.
 */
declare class MultitrackDocument {
	/**
	 * 
	 */
	readonly ancestor: any;

	/**
	 * Collection of all currently selected audio clips of this multitrack document.
	 */
	readonly audioClipSelection: AudioClipSelectionCollection;

	/**
	 * Collection of all audio tracks of the multitrack document.
	 */
	readonly audioTracks: MixedAudioTrackCollection;

	/**
	 * The dirty state of the document
	 */
	dirty: boolean;

	/**
	 * Display name of the document as shown in the UI. It doesn't necessarily refers to the file name without filename extension.
	 */
	readonly displayName: string;

	/**
	 * Duration in samples
	 */
	readonly duration: number;

	/**
	 * Unique identifier of this document.
	 */
	readonly id: string;

	/**
	 * Returns true if this document is a sub-document of a CompountDocument.
	 */
	readonly isCompoundSubDocument: boolean;

	/**
	 * Returns an array of marker objects. Each marker object consists of the properties 'start' 'length' 'name' 'description' and 'type'.
	 */
	readonly markers: Array;

	/**
	 * Returns the document's current metadata as a vanilla Object. Each property is readonly and represents an metadata entry.
	 */
	readonly metadata: Metadata;

	/**
	 * Retrieve the panner settings of the multitrack document.
	 */
	readonly pannerSettings: PannerSettings;

	/**
	 * Returns this document's parent CompoundDocument if it exists.
	 */
	readonly parentCompoundDocument: object;

	/**
	 * Returns a platform-specific path to the document on disk or empty if it doesn't currently have a path.
	 */
	readonly path: string;

	/**
	 * The current playhead position in samples
	 */
	playheadPosition: number;

	/**
	 * The audio sample rate (Hz) of the current document.
	 */
	readonly sampleRate: number;

	/**
	 * Makes the current document the active (front-most) document.
	 */
	activate(): boolean;

	/**
	 * 
	 * @param description Add a new marker to the document. Possible marker types are 'cue' 'track' 'cart' 'subclip'
	 */
	addMarker(start: number, duration: number, name: string, type: string, description: string): boolean;

	/**
	 * Close the document. Returns false if the document can't be closed right now (e.g. due to ongoing document operations)
	 */
	closeDocument(): boolean;

	/**
	 * 
	 * @param exportParameter Export document as a template. Optional parameter exportParameter specifies the export in more detail. Returns an object which provides information if and what error occured with the properties error: true if any error occured internal: internal error templateExists: template name already exists. Export document as a template.
	 */
	exportAsTemplate(name: string, exportParameter: MultitrackExportAsTemplateParameter): object;

	/**
	 * 
	 * @param exportParameter Export document to a new location. Optional parameter exportParameter specifies the export in more detail. Returns an object which provides information if and what error occured with the properties error: true if any error occured fileReadOnly: destination file is readonly folderReadOnly: destination folder is readonly invalidFilename: destination filename is empty or too long or a reserved name invalidFilenameExt: invalid filename extension for the destination format openDocument: destination file would overwrite a currently open document internal: internal error. Export document to a new location optionally with conversion parameters.
	 */
	exportDocument(path: string, exportParameter: MultitrackExportParameter): object;

	/**
	 * 
	 * @param saveAsParameter Save document to a new location. Optional parameter saveAsParameter specifies the saveAs in more detail. Returns an object which provides information if and what error occured with the properties error: true if any error occured fileReadOnly: destination file is readonly folderReadOnly: destination folder is readonly invalidFilename: destination filename is empty or too long or a reserved name invalidFilenameExt: invalid filename extension for the destination format openDocument: destination file would overwrite a currently open document internal: internal error. Save document to a new location optionally with conversion parameters.
	 */
	saveAsDocument(path: string, saveAsParameter: MultitrackSaveAsParameter): object;

	/**
	 * 
	 * @param saveParameter Save document to its current location. Optional parameter saveParameter specifies the save in more detail. Returns an object which provides information if and what error occured with the properties error: true if any error occured missingPath: document doesn't provide a valid destination path fileReadOnly: destination file is readonly folderReadOnly: destination folder is readonly internal: internal error. Save document to its current location.
	 */
	saveDocument(saveParameter: MultitrackSaveParameter): object;

}

/**
 * Parameter to saveAs a wave document.
 */
declare class WaveDocumentSaveAsParameters {
	/**
	 * New document file format. Set to null to keep the current format.
	 */
	fileFormat: object;

	/**
	 * Set to true if document metadata should be included into the new file.
	 */
	includeMetadata: boolean;

	/**
	 * Sample type conversion parameter. Set to null to keep the current sample type.
	 */
	sampleTypeConversion: object;

	/**
	 * Create a new instance.
	 */
	constructor();

}

/**
 * Parameter to export a wave document.
 */
declare class WaveDocumentExportParameters {
	/**
	 * New document file format. Set to null to keep the current format.
	 */
	fileFormat: object;

	/**
	 * Set to true if document metadata should be included into the new file.
	 */
	includeMetadata: boolean;

	/**
	 * Sample type conversion parameter. Set to null to keep the current sample type.
	 */
	sampleTypeConversion: object;

	/**
	 * Create a new instance.
	 */
	constructor();

}

/**
 * Represents any waveform document
 */
declare class WaveDocument {
	/**
	 * 
	 */
	readonly ancestor: any;

	/**
	 * The audio format of the document (sample rate bit depth channel layout)
	 */
	readonly audioFormat: object;

	/**
	 * Returns that amount of progress from 0 to 100 for the document's current operation.
	 */
	readonly busyProgress: number;

	/**
	 * The dirty state of the document
	 */
	dirty: boolean;

	/**
	 * Display name of the document as shown in the UI. It doesn't necessarily refers to the file name without filename extension.
	 */
	readonly displayName: string;

	/**
	 * Duration in samples
	 */
	readonly duration: number;

	/**
	 * true if the document exists.
	 */
	readonly exists: boolean;

	/**
	 * File format of the document
	 */
	readonly fileFormat: AudioFileFormat;

	/**
	 * Unique identifier of this document.
	 */
	readonly id: string;

	/**
	 * true if the document is busy (e.g. in the process of being saved).
	 */
	readonly isBusy: boolean;

	/**
	 * Returns true if this document is a sub-document of a CompountDocument.
	 */
	readonly isCompoundSubDocument: boolean;

	/**
	 * Returns an array of marker objects. Each marker object consists of the properties 'start' 'length' 'name' 'description' and 'type'.
	 */
	readonly markers: Array;

	/**
	 * Returns the document's current metadata as a vanilla Object. Each property is readonly and represents an metadata entry.
	 */
	readonly metadata: Metadata;

	/**
	 * Returns this document's parent CompoundDocument if it exists.
	 */
	readonly parentCompoundDocument: object;

	/**
	 * Returns a platform-specific path to the document on disk or empty if it doesn't currently have a path.
	 */
	readonly path: string;

	/**
	 * The current playhead position in samples
	 */
	playheadPosition: number;

	/**
	 * The audio sample rate (Hz) of the current document.
	 */
	readonly sampleRate: number;

	/**
	 * Makes the current document the active (front-most) document.
	 */
	activate(): boolean;

	/**
	 * 
	 * @param description Add a new marker to the document. Possible marker types are 'cue' 'track' 'cart' 'subclip'
	 */
	addMarker(start: number, duration: number, name: string, type: string, description: string): boolean;

	/**
	 * 
	 * @param name Apply a registered favorite to this document
	 */
	applyFavorite(name: string): boolean;

	/**
	 * Close the document. Returns false if the document can't be closed right now (e.g. due to ongoing document operations)
	 */
	closeDocument(): boolean;

	/**
	 * 
	 * @param exportParams Export document to a new location. Optional parameter exportParams specifies the export in more detail. Returns an object which provides information if and what error occured with the properties error: true if any error occured fileReadOnly: destination file is readonly folderReadOnly: destination folder is readonly invalidFilename: destination filename is empty or too long or a reserved name openDocument: destination file would overwrite a currently open document invalidSampleType: file can't be stored with audio format settings internal: internal error. Export document at a new location optionally with conversion parameters.
	 */
	exportDocument(path: string, exportParams: WaveDocumentExportParameters): object;

	/**
	 * 
	 * @param export_ Save the document at the given location. Do an export if the parameter 'export' is true. Returns true on success.
	 */
	saveAs(path: string, export_: boolean): boolean;

	/**
	 * 
	 * @param saveAsParams Save document to a new location. Optional parameter saveAsParameter specifies the saveAs in more detail. Returns an object which provides information if and what error occured with the properties error: true if any error occured fileReadOnly: destination file is readonly folderReadOnly: destination folder is readonly invalidFilename: destination filename is empty or too long or a reserved name openDocument: destination file would overwrite a currently open document invalidSampleType: file can't be stored with audio format settings internal: internal error. Save document at a new location optionally with conversion parameters.
	 */
	saveAsDocument(path: string, saveAsParams: WaveDocumentSaveAsParameters): object;

	/**
	 * 
	 * @param arg1 Save document to its current location. Returns an object which provides information if and what error occured with the properties error: true if any error occured missingPath: document doesn't provide a valid destination path subDocument: the audio data belongs to a media file and can't be saved fileReadOnly: destination file is readonly folderReadOnly: destination folder is readonly internal: internal error. Save document at its current location.
	 */
	saveDocument(arg1: object): any;

}

/**
 * Represents the mixing options of a multitrack document.
 */
declare class PannerSettings {
	/**
	 * The gain applied when set to MODE_MINUSXDBCENTER. Reading or writing this if the mode is not set to MODE_MINUSXDBCENTER will throw an exception.
	 */
	gain: number;

	/**
	 * The mixing mode (either MODE_MINUSXDBCENTER or MODE_LOGARITHMICCUT).
	 */
	mode: number;

}

/**
 * Describes an audio file format
 */
declare class AudioFileFormat {
	/**
	 * AAC 繧ｪ繝ｼ繝�ぅ繧ｪ
	 */
	static readonly FORMAT_AAC_: string;

	/**
	 * AIFF
	 */
	static readonly FORMAT_AIFF: string;

	/**
	 * Apple 繧ｪ繝ｼ繝�ぅ繧ｪ繝��繝ｫ繝懊ャ繧ｯ繧ｹ
	 */
	static readonly FORMAT_APPLE__CAF: string;

	/**
	 * FLAC (Free Lossless Audio Codec)
	 */
	static readonly FORMAT_FLAC_FREE_LOSSLESS_AUDIO_CODEC: string;

	/**
	 * Libsndfile
	 */
	static readonly FORMAT_LIBSNDFILE_AU: string;

	/**
	 * Monkey's Audio
	 */
	static readonly FORMAT_MONKEYS_AUDIO_APE: string;

	/**
	 * MP2 繧ｪ繝ｼ繝�ぅ繧ｪ
	 */
	static readonly FORMAT_MP2_: string;

	/**
	 * MP3 繧ｪ繝ｼ繝�ぅ繧ｪ
	 */
	static readonly FORMAT_MP3_: string;

	/**
	 * Wave PCM
	 */
	static readonly FORMAT_WAVE_PCM: string;

	/**
	 * Xiph OGG 繧ｳ繝ｳ繝�リ
	 */
	static readonly FORMAT_XIPH_OGG_: string;

	/**
	 * Possible filename extensions
	 */
	readonly extensions: Array;

	/**
	 * Unique identifier of the format
	 */
	readonly id: string;

	/**
	 * Title of the format
	 */
	readonly title: string;

	/**
	 * 
	 * @param  Construct a new AudioFileFormat object. Use one of the constants FORMAT_ as parameter to define the format.
	 */
	constructor(: string);

}

/**
 * Collection of selected audio clips.
 */
declare class AudioClipSelectionCollection {
	/**
	 * Returns an audio clip by its index
	 */
	readonly index: AudioClipCollection;

	/**
	 * Number of audio clips.
	 */
	readonly length: number;

	/**
	 * 
	 * @param AudioClip Add clip to the selection.
	 */
	add(AudioClip: any): object;

	/**
	 * Clear the selection
	 */
	clear(): boolean;

	/**
	 * 
	 * @param AudioClipSelectionCollection Remove clip from the selection.
	 */
	remove(AudioClipSelectionCollection: any): boolean;

}

/**
 * This events is fired if one or more documents related event happened.
 */
declare class AudioClipEvent {
	/**
	 * This event is fired after a clip was added to a multitrack document.
	 */
	static readonly EVENT_ADDED: string;

	/**
	 * This event is fired after a clip was moved within a multitrack document.
	 */
	static readonly EVENT_MOVED: string;

	/**
	 * This event is fired after a clip was removed from a multitrack document.
	 */
	static readonly EVENT_REMOVED: string;

	/**
	 * This event is fired after the selection state of the clip changed.
	 */
	static readonly EVENT_SELECTION: string;

	/**
	 * Clip object
	 */
	readonly clip: object;

	/**
	 * Unique clip ID.
	 */
	readonly clipID: string;

	/**
	 * Related document
	 */
	readonly document: object;

	/**
	 * Unique document ID.
	 */
	readonly documentID: string;

	/**
	 * Document file path.
	 */
	readonly path: string;

	/**
	 * Related track
	 */
	readonly track: object;

	/**
	 * Unique track ID.
	 */
	readonly trackID: number;

	/**
	 * Track name.
	 */
	readonly trackName: string;

}

/**
 * Collection of audio clips of the according audio track.
 */
declare class AudioClipCollection {
	/**
	 * Returns an audio clip by its index
	 */
	readonly index: AudioClipCollection;

	/**
	 * Number of audio clips.
	 */
	readonly length: number;

	/**
	 * 
	 * @param sourceChannelRouting Add new clip to the track based on the passed in document or move the passed in clip to this track.
	 */
	add(AudioClip: any, sourceChannelRouting: Array): object;

	/**
	 * 
	 * @param AudioClipCollection Remove clip from this track.
	 */
	remove(AudioClipCollection: any): boolean;

}

/**
 * An object representing a particular audio clip as part of a multitrack session.
 */
declare class AudioClip {
	/**
	 * 
	 */
	readonly ancestor: any;

	/**
	 * The audio format of the clip (sample rate bit depth channel layout)
	 */
	readonly audioFormat: object;

	/**
	 * The duration of the clip measured in samples at the multitrack document's sample rate.
	 */
	readonly duration: number;

	/**
	 * Unique id of the clip.
	 */
	readonly id: string;

	/**
	 * Document associated with this clip.
	 */
	link: object;

	/**
	 * The name of the clip.
	 */
	readonly name: string;

	/**
	 * Selection state of this audio clip.
	 */
	readonly selected: boolean;

	/**
	 * Mapping of source channels to clip channels. The array contains indices of source channels which are routed to the according clip channels. The array has to have as many source channel indices as there are clip channels. Each source channel can be routed to exactly one clip channel.
	 */
	sourceChannelRouting: Array;

	/**
	 * The start time of the clip measured in samples at the multitrack document's sample rate.
	 */
	startTime: number;

}

/**
 * AudioChannelLayout represents a channel layout with named channels proved as constants AUDIOCHANNELLABEL_ ... An AudioChannelLayout can be created using an Array of these constants or it could be created using one of the constants CHANNELLAYOUT_ ... to create a common layout.
 */
declare class AudioChannelLayout {
	/**
	 * Ambisonic-W
	 */
	static readonly AUDIOCHANNELLABEL_AMBISONIC_W: number;

	/**
	 * Ambisonic-X
	 */
	static readonly AUDIOCHANNELLABEL_AMBISONIC_X: number;

	/**
	 * Ambisonic-Y
	 */
	static readonly AUDIOCHANNELLABEL_AMBISONIC_Y: number;

	/**
	 * Ambisonic-Z
	 */
	static readonly AUDIOCHANNELLABEL_AMBISONIC_Z: number;

	/**
	 * Back-Center
	 */
	static readonly AUDIOCHANNELLABEL_BACKCENTER: number;

	/**
	 * Back-Left
	 */
	static readonly AUDIOCHANNELLABEL_BACKLEFT: number;

	/**
	 * Back-Right
	 */
	static readonly AUDIOCHANNELLABEL_BACKRIGHT: number;

	/**
	 * Bottom-Front-Center
	 */
	static readonly AUDIOCHANNELLABEL_BOTTOMFRONTCENTER: number;

	/**
	 * Bottom-Front-Left
	 */
	static readonly AUDIOCHANNELLABEL_BOTTOMFRONTLEFT: number;

	/**
	 * Bottom-Front-Right
	 */
	static readonly AUDIOCHANNELLABEL_BOTTOMFRONTRIGHT: number;

	/**
	 * Discrete
	 */
	static readonly AUDIOCHANNELLABEL_DISCRETE: number;

	/**
	 * Front-Center
	 */
	static readonly AUDIOCHANNELLABEL_FRONTCENTER: number;

	/**
	 * Front-Left
	 */
	static readonly AUDIOCHANNELLABEL_FRONTLEFT: number;

	/**
	 * Front-Left-Of-Center
	 */
	static readonly AUDIOCHANNELLABEL_FRONTLEFTOFCENTER: number;

	/**
	 * Front-Left-Wide
	 */
	static readonly AUDIOCHANNELLABEL_FRONTLEFTWIDE: number;

	/**
	 * Front-Right
	 */
	static readonly AUDIOCHANNELLABEL_FRONTRIGHT: number;

	/**
	 * Front-Right-Of-Center
	 */
	static readonly AUDIOCHANNELLABEL_FRONTRIGHTOFCENTER: number;

	/**
	 * Front-Right-Wide
	 */
	static readonly AUDIOCHANNELLABEL_FRONTRIGHTWIDE: number;

	/**
	 * Left-Height
	 */
	static readonly AUDIOCHANNELLABEL_LEFTHEIGHT: number;

	/**
	 * Left-Total
	 */
	static readonly AUDIOCHANNELLABEL_LEFTTOTAL: number;

	/**
	 * LFE2
	 */
	static readonly AUDIOCHANNELLABEL_LFE2: number;

	/**
	 * Low-Frequency
	 */
	static readonly AUDIOCHANNELLABEL_LOWFREQUENCY: number;

	/**
	 * Proximity-Left
	 */
	static readonly AUDIOCHANNELLABEL_PROXIMITYLEFT: number;

	/**
	 * Proximity-Right
	 */
	static readonly AUDIOCHANNELLABEL_PROXIMITYRIGHT: number;

	/**
	 * Rear-Surround-Left
	 */
	static readonly AUDIOCHANNELLABEL_REARSURROUNDLEFT: number;

	/**
	 * Rear-Surround-Right
	 */
	static readonly AUDIOCHANNELLABEL_REARSURROUNDRIGHT: number;

	/**
	 * Right-Height
	 */
	static readonly AUDIOCHANNELLABEL_RIGHTHEIGHT: number;

	/**
	 * Right-Total
	 */
	static readonly AUDIOCHANNELLABEL_RIGHTTOTAL: number;

	/**
	 * Side-Left
	 */
	static readonly AUDIOCHANNELLABEL_SIDELEFT: number;

	/**
	 * Side-Right
	 */
	static readonly AUDIOCHANNELLABEL_SIDERIGHT: number;

	/**
	 * Top-Back-Center
	 */
	static readonly AUDIOCHANNELLABEL_TOPBACKCENTER: number;

	/**
	 * Top-Back-Left
	 */
	static readonly AUDIOCHANNELLABEL_TOPBACKLEFT: number;

	/**
	 * Top-Back-Right
	 */
	static readonly AUDIOCHANNELLABEL_TOPBACKRIGHT: number;

	/**
	 * Top-Center
	 */
	static readonly AUDIOCHANNELLABEL_TOPCENTER: number;

	/**
	 * Top-Front-Center
	 */
	static readonly AUDIOCHANNELLABEL_TOPFRONTCENTER: number;

	/**
	 * Top-Front-Left
	 */
	static readonly AUDIOCHANNELLABEL_TOPFRONTLEFT: number;

	/**
	 * Top-Front-Right
	 */
	static readonly AUDIOCHANNELLABEL_TOPFRONTRIGHT: number;

	/**
	 * 32 Channel Configuration Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete
	 */
	static readonly CHANNELLAYOUT_32_DISCRETE_CHANNELS: number;

	/**
	 * 4 Channel Configuration Discrete Discrete Discrete Discrete
	 */
	static readonly CHANNELLAYOUT_4_DISCRETE_CHANNELS: number;

	/**
	 * 6 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right
	 */
	static readonly CHANNELLAYOUT_51: number;

	/**
	 * 8 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Front-Left-Of-Center Front-Right-Of-Center
	 */
	static readonly CHANNELLAYOUT_7_1: number;

	/**
	 * 8 Channel Configuration Front-Left Front-Right Back-Left Back-Right Front-Center Low-Frequency Front-Left-Of-Center Front-Right-Of-Center
	 */
	static readonly CHANNELLAYOUT_7_1EMAGIC: number;

	/**
	 * 8 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Rear-Surround-Left Rear-Surround-Right
	 */
	static readonly CHANNELLAYOUT_7_1ITU: number;

	/**
	 * 8 Channel Configuration Front-Center Front-Left-Of-Center Front-Right-Of-Center Front-Left Front-Right Back-Left Back-Right Low-Frequency
	 */
	static readonly CHANNELLAYOUT_7_1MPEG: number;

	/**
	 * 8 Channel Configuration Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete
	 */
	static readonly CHANNELLAYOUT_8_DISCRETE_CHANNELS: number;

	/**
	 * 4 Channel Configuration Ambisonic-W Ambisonic-X Ambisonic-Y Ambisonic-Z
	 */
	static readonly CHANNELLAYOUT_AMBISONICSBFORMAT: number;

	/**
	 * 2 Channel Configuration Bottom-Front-Left Bottom-Front-Right
	 */
	static readonly CHANNELLAYOUT_BFL_BFR: number;

	/**
	 * 6 Channel Configuration Front-LeftFront-Right Front-Center Low-Frequency Back-Left Back-Right
	 */
	static readonly CHANNELLAYOUT_BROADCAST51: number;

	/**
	 * 8 Channel Configuration Front-Left Front-Right Back-Left Back-Right Top-Front-Left Top-Front-Right Top-Back-Left Top-Back-Right
	 */
	static readonly CHANNELLAYOUT_CUBE: number;

	/**
	 * 2 Channel Configuration Front-Center Low-Frequency
	 */
	static readonly CHANNELLAYOUT_C_LFE: number;

	/**
	 * 3 Channel Configuration Front-Center Front-Left Front-Right
	 */
	static readonly CHANNELLAYOUT_C_L_R: number;

	/**
	 * 4 Channel Configuration Front-Center Front-Left Front-Right Back-Center
	 */
	static readonly CHANNELLAYOUT_C_L_R_CS: number;

	/**
	 * 5 Channel Configuration Front-Center Front-Left Front-Right Back-Left Back-Right
	 */
	static readonly CHANNELLAYOUT_C_L_R_LS_RS: number;

	/**
	 * 6 Channel Configuration Front-Center Front-Left Front-Right Back-Left Back-Right Back-Center
	 */
	static readonly CHANNELLAYOUT_C_L_R_LS_RS_CS: number;

	/**
	 * 7 Channel Configuration Front-Center Front-Left Front-Right Back-Left Back-Right Back-Center Low-Frequency
	 */
	static readonly CHANNELLAYOUT_C_L_R_LS_RS_CS_LFE: number;

	/**
	 * 6 Channel Configuration Front-Center Front-Left Front-Right Back-Left Back-Right Low-Frequency
	 */
	static readonly CHANNELLAYOUT_C_L_R_LS_RS_LFE: number;

	/**
	 * 7 Channel Configuration Front-Center Front-Left Front-Right Back-Left Back-Right Rear-Surround-Left Rear-Surround-Right
	 */
	static readonly CHANNELLAYOUT_C_L_R_LS_RS_RLS_RRS: number;

	/**
	 * 8 Channel Configuration Front-Center Front-Left Front-Right Back-Left Back-Right Rear-Surround-Left Rear-Surround-Right Back-Center
	 */
	static readonly CHANNELLAYOUT_C_L_R_LS_RS_RLS_RRS_CS: number;

	/**
	 * 6 Channel Configuration Front-Left Front-Right Back-Left Back-Right Front-Center Back-Center
	 */
	static readonly CHANNELLAYOUT_HEXAGONAL: number;

	/**
	 * 2 Channel Configuration Front-Left-Of-Center Front-Right-Of-Center
	 */
	static readonly CHANNELLAYOUT_LC_RC: number;

	/**
	 * 6 Channel Configuration Front-Left Front-Right Back-Left Back-Right Front-Center Low-Frequency
	 */
	static readonly CHANNELLAYOUT_LEGACY51: number;

	/**
	 * 2 Channel Configuration Side-Left Side-Right
	 */
	static readonly CHANNELLAYOUT_LSD_RSD: number;

	/**
	 * 2 Channel Configuration Back-Left Back-Right
	 */
	static readonly CHANNELLAYOUT_LS_RS: number;

	/**
	 * 3 Channel Configuration Front-Left Front-Center Front-Right
	 */
	static readonly CHANNELLAYOUT_L_C_R: number;

	/**
	 * 4 Channel Configuration Front-Left Front-Center Front-Right Back-Center
	 */
	static readonly CHANNELLAYOUT_L_C_R_CS: number;

	/**
	 * 5 Channel Configuration Front-Left Front-Center Front-Right Back-Center Low-Frequency
	 */
	static readonly CHANNELLAYOUT_L_C_R_CS_LFE: number;

	/**
	 * 4 Channel Configuration Front-Left Front-Center Front-Right Low-Frequency
	 */
	static readonly CHANNELLAYOUT_L_C_R_LFE: number;

	/**
	 * 5 Channel Configuration Front-Left Front-Center Front-Right Back-Left Back-Right
	 */
	static readonly CHANNELLAYOUT_L_C_R_LS_RS: number;

	/**
	 * 6 Channel Configuration Front-Left Front-Center Front-Right Back-Left Back-Right Low-Frequency
	 */
	static readonly CHANNELLAYOUT_L_C_R_LS_RS_LFE: number;

	/**
	 * 3 Channel Configuration Front-Left Front-Right Front-Center
	 */
	static readonly CHANNELLAYOUT_L_R_C: number;

	/**
	 * 3 Channel Configuration Front-Left Front-Right Back-Center
	 */
	static readonly CHANNELLAYOUT_L_R_CS: number;

	/**
	 * 4 Channel Configuration Front-Left Front-Right Back-Center Low-Frequency
	 */
	static readonly CHANNELLAYOUT_L_R_CS_LFE: number;

	/**
	 * 4 Channel Configuration Front-Left Front-Right Front-Center Back-Center
	 */
	static readonly CHANNELLAYOUT_L_R_C_CS: number;

	/**
	 * 4 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency
	 */
	static readonly CHANNELLAYOUT_L_R_C_LFE: number;

	/**
	 * 5 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Center
	 */
	static readonly CHANNELLAYOUT_L_R_C_LFE_CS: number;

	/**
	 * 7 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Back-Center
	 */
	static readonly CHANNELLAYOUT_L_R_C_LFE_LS_RS_CS: number;

	/**
	 * 9 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Back-Center Side-Left Side-Right
	 */
	static readonly CHANNELLAYOUT_L_R_C_LFE_LS_RS_CS_LSD_RSD: number;

	/**
	 * 14 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Back-Center Top-Center Top-Front-Left Top-Front-Center Top-Front-Right Top-Back-Left Top-Back-Center Top-Back-Right
	 */
	static readonly CHANNELLAYOUT_L_R_C_LFE_LS_RS_CS_TS_VHL_VHC_VHR_TBL_TBR: number;

	/**
	 * 9 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Front-Left-Of-Center Front-Right-Of-Center Back-Center
	 */
	static readonly CHANNELLAYOUT_L_R_C_LFE_LS_RS_LC_RC_CS: number;

	/**
	 * 8 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Side-Left Side-Right
	 */
	static readonly CHANNELLAYOUT_L_R_C_LFE_LS_RS_LSD_RSD: number;

	/**
	 * 10 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Side-Left Side-Right Left-Height Right-Height
	 */
	static readonly CHANNELLAYOUT_L_R_C_LFE_LS_RS_LSD_RSD_TSL_TSR: number;

	/**
	 * 8 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Proximity-Left Proximity-Right
	 */
	static readonly CHANNELLAYOUT_L_R_C_LFE_LS_RS_PL_PR: number;

	/**
	 * 12 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Top-Center Top-Front-Left Top-Front-Center Top-Front-Right Top-Back-Left Top-Back-Right
	 */
	static readonly CHANNELLAYOUT_L_R_C_LFE_LS_RS_TS_VHL_VHC_VHR_TBL_TBR: number;

	/**
	 * 11 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Top-Center Top-Front-Left Top-Front-Right Top-Back-Left Top-Back-Right
	 */
	static readonly CHANNELLAYOUT_L_R_C_LFE_LS_RS_TS_VHL_VHR_TBL_TBR: number;

	/**
	 * 10 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Top-Front-Left Top-Front-Right Top-Back-Left Top-Back-Right
	 */
	static readonly CHANNELLAYOUT_L_R_C_LFE_LS_RS_VHL_VHR_TBL_TBR: number;

	/**
	 * 5 Channel Configuration Front-Left Front-Right Front-Center Back-Left Back-Right
	 */
	static readonly CHANNELLAYOUT_L_R_C_LS_RS: number;

	/**
	 * 6 Channel Configuration Front-Left Front-Right Front-Center Back-Left Back-Right Back-Center
	 */
	static readonly CHANNELLAYOUT_L_R_C_LS_RS_CS: number;

	/**
	 * 8 Channel Configuration Front-Left Front-Right Front-Center Back-Left Back-Right Back-Center Side-Left Side-Right
	 */
	static readonly CHANNELLAYOUT_L_R_C_LS_RS_CS_LSD_RSD: number;

	/**
	 * 13 Channel Configuration Front-Left Front-Right Front-Center Back-Left Back-Right Back-Center Top-Center Top-Front-Left Top-Front-Center Top-Front-Right Top-Back-Left Top-Back-Center Top-Back-Right
	 */
	static readonly CHANNELLAYOUT_L_R_C_LS_RS_CS_TS_VHL_VHC_VHR_TBL_TBR: number;

	/**
	 * 7 Channel Configuration Front-Left Front-Right Front-Center Back-Left Back-Right Front-Left-Of-Center Front-Right-Of-Center
	 */
	static readonly CHANNELLAYOUT_L_R_C_LS_RS_LC_RC: number;

	/**
	 * 8 Channel Configuration Front-Left Front-Right Front-Center Back-Left Back-Right Front-Left-Of-Center Front-Right-Of-Center Back-Center
	 */
	static readonly CHANNELLAYOUT_L_R_C_LS_RS_LC_RC_CS: number;

	/**
	 * 7 Channel Configuration Front-Left Front-Right Front-Center Back-Left Back-Right Side-Left Side-Right
	 */
	static readonly CHANNELLAYOUT_L_R_C_LS_RS_LSD_RSD: number;

	/**
	 * 11 Channel Configuration Front-Left Front-Right Front-Center Back-Left Back-Right Top-Center Top-Front-Left Top-Front-Center Top-Front-Right Top-Back-Left Top-Back-Right
	 */
	static readonly CHANNELLAYOUT_L_R_C_LS_RS_TS_VHL_VHC_VHR_TBL_TBR: number;

	/**
	 * 10 Channel Configuration Front-Left Front-Right Front-Center Back-Left Back-Right Top-Center Top-Front-Left Top-Front-Right Top-Back-Left Top-Back-Right
	 */
	static readonly CHANNELLAYOUT_L_R_C_LS_RS_TS_VHL_VHR_TBL_TBR: number;

	/**
	 * 9 Channel Configuration Front-Left Front-Right Front-Center Back-Left Back-Right Top-Front-Left Top-Front-Right Top-Back-Left Top-Back-Right
	 */
	static readonly CHANNELLAYOUT_L_R_C_LS_RS_VHL_VHR_TBL_TBR: number;

	/**
	 * 3 Channel Configuration Front-Left Front-Right Low-Frequency
	 */
	static readonly CHANNELLAYOUT_L_R_LFE: number;

	/**
	 * 4 Channel Configuration Front-Left Front-Right Low-Frequency Back-Center
	 */
	static readonly CHANNELLAYOUT_L_R_LFE_CS: number;

	/**
	 * 5 Channel Configuration Front-Left Front-Right Low-Frequency Back-Left Back-Right
	 */
	static readonly CHANNELLAYOUT_L_R_LFE_LS_RS: number;

	/**
	 * 7 Channel Configuration Front-Left Front-Right Low-Frequency Back-Left Back-Right Side-Left Side-Right
	 */
	static readonly CHANNELLAYOUT_L_R_LFE_LS_RS_LSD_RSD: number;

	/**
	 * 9 Channel Configuration Front-Left Front-Right Low-Frequency Back-Left Back-Right Top-Front-Left Top-Front-Center Top-Front-Right Bottom-Front-Center
	 */
	static readonly CHANNELLAYOUT_L_R_LFE_LS_RS_VHL_VHC_VHR_BFC: number;

	/**
	 * 5 Channel Configuration Front-Left Front-Right Back-Left Back-Right Front-Center
	 */
	static readonly CHANNELLAYOUT_L_R_LS_RS_C: number;

	/**
	 * 7 Channel Configuration Front-Left Front-Right Back-Left Back-Right Front-Center Front-Left-Of-Center Front-Right-Of-Center
	 */
	static readonly CHANNELLAYOUT_L_R_LS_RS_C_LC_RC: number;

	/**
	 * 7 Channel Configuration Front-Left Front-Right Back-Left Back-Right Front-Center Rear-Surround-Left Rear-Surround-Right
	 */
	static readonly CHANNELLAYOUT_L_R_LS_RS_C_RLS_RRS: number;

	/**
	 * 5 Channel Configuration Front-Left Front-Right Back-Left Back-Right Low-Frequency
	 */
	static readonly CHANNELLAYOUT_L_R_LS_RS_LFE: number;

	/**
	 * 6 Channel Configuration Front-Left Front-Right Back-Left Back-Right Side-Left Side-Right
	 */
	static readonly CHANNELLAYOUT_L_R_LS_RS_LSD_RSD: number;

	/**
	 * 2 Channel Configuration Left-Total Right-Total
	 */
	static readonly CHANNELLAYOUT_MATRIXSTEREO: number;

	/**
	 * 1 Channel Configuration Discrete
	 */
	static readonly CHANNELLAYOUT_MONO: number;

	/**
	 * 8 Channel Configuration Front-Left Front-Right Back-Left Back-Right Front-Center Back-Center Side-Left Side-Right
	 */
	static readonly CHANNELLAYOUT_OCTAGONAL: number;

	/**
	 * 5 Channel Configuration Front-Left Front-Right Back-Left Back-Right Front-Center
	 */
	static readonly CHANNELLAYOUT_PENTAGONAL: number;

	/**
	 * 4 Channel Configuration Front-Left Front-Right Back-Left Back-Right
	 */
	static readonly CHANNELLAYOUT_QUADRAPHONIC: number;

	/**
	 * 16 Channel Configuration Discrete Discrete Front-Center Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete
	 */
	static readonly CHANNELLAYOUT_SMPTEDIGITALCINEMA1: number;

	/**
	 * 16 Channel Configuration Left-Total Right-Total Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete
	 */
	static readonly CHANNELLAYOUT_SMPTEDIGITALCINEMA2: number;

	/**
	 * 16 Channel Configuration Front-Left Front-Right Front-Center Discrete Back-Center Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete
	 */
	static readonly CHANNELLAYOUT_SMPTEDIGITALCINEMA4: number;

	/**
	 * 16 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete
	 */
	static readonly CHANNELLAYOUT_SMPTEDIGITALCINEMA6: number;

	/**
	 * 16 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Discrete Discrete Back-Center Discrete Discrete Discrete Discrete Discrete Discrete Discrete
	 */
	static readonly CHANNELLAYOUT_SMPTEDIGITALCINEMA7: number;

	/**
	 * 16 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Front-Left-Of-Center Front-Right-Of-Center Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete
	 */
	static readonly CHANNELLAYOUT_SMPTEDIGITALCINEMA8: number;

	/**
	 * 16 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Front-Left-Of-Center Front-Right-Of-Center Back-Center Discrete Discrete Discrete Discrete Discrete Discrete Discrete
	 */
	static readonly CHANNELLAYOUT_SMPTEDIGITALCINEMA9: number;

	/**
	 * 8 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Left-Total Right-Total
	 */
	static readonly CHANNELLAYOUT_SMPTEDTV: number;

	/**
	 * 2 Channel Configuration Front-Left Front-Right
	 */
	static readonly CHANNELLAYOUT_STEREO: number;

	/**
	 * 2 Channel Configuration Top-Back-Left Top-Back-Right
	 */
	static readonly CHANNELLAYOUT_TBL_TBR: number;

	/**
	 * 2 Channel Configuration Left-Height Right-Height
	 */
	static readonly CHANNELLAYOUT_TSL_TSR: number;

	/**
	 * 2 Channel Configuration Top-Front-Left Top-Front-Right
	 */
	static readonly CHANNELLAYOUT_VHL_VHR: number;

	/**
	 * 12 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Top-Front-Left Top-Front-Center Top-Front-Right Top-Back-Left Top-Back-Right LFE2
	 */
	static readonly CHANNELLAYOUT_VST10_2: number;

	/**
	 * 14 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Front-Left-Of-Center Front-Right-Of-Center Top-Front-Left Top-Front-Center Top-Front-Right Top-Back-Left Top-Back-Right LFE2
	 */
	static readonly CHANNELLAYOUT_VST10_2_PLUS: number;

	/**
	 * 8 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Back-Center Top-Front-Center
	 */
	static readonly CHANNELLAYOUT_VST_7_1_CINE_CENTER_HIGH: number;

	/**
	 * 8 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Top-Front-Left Top-Front-Right
	 */
	static readonly CHANNELLAYOUT_VST_7_1_CINE_FRONT_HIGH: number;

	/**
	 * 8 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Left-Height Right-Height
	 */
	static readonly CHANNELLAYOUT_VST_7_1_CINE_SIDE_HIGH: number;

	/**
	 * 8 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Back-Center Top-Center
	 */
	static readonly CHANNELLAYOUT_VST_7_1_CINE_TOP_CENTER: number;

	/**
	 * Audio channel layout description
	 */
	readonly description: string;

	/**
	 * Returns an audio channel label.
	 */
	readonly index: number;

	/**
	 * Number of audio channels.
	 */
	readonly length: number;

	/**
	 * 
	 * @param labels Create a audio channel layout.
	 */
	static createAudioChannelLayout(labels: Array): AudioChannelLayout;

	/**
	 * 
	 * @param layout Create a common audio channel layout.
	 */
	static createCommonAudioChannelLayout(layout: number): AudioChannelLayout;

	/**
	 * 
	 * @param label Label string of a single audio channel label
	 */
	static label(label: number): string;

}

/**
 * Provide telemetry around application launch metrics
 */
declare class AppLaunchMetrics {
	/**
	 * Return process up-time in milliseconds
	 */
	static getProcessUpTime(): number;

}

/**
 * AudioFormat describes the format in the form of the sample rate, the bit depth and the channel layout.
 */
declare class AudioFormat {
	/**
	 * 16 bit signed integer
	 */
	static readonly SAMPLETYPE_16: number;

	/**
	 * 24 bit signed integer
	 */
	static readonly SAMPLETYPE_24: number;

	/**
	 * 32 bit floating point
	 */
	static readonly SAMPLETYPE_32: number;

	/**
	 * 8 bit unsigned integer
	 */
	static readonly SAMPLETYPE_8: number;

	/**
	 * Bit depth of a sample as well as its data format. Always normalized to 8 bit unsigned integer 16 bit signed integer little endian 24 bit signed integer little endian packed or 32 bit floating point (range -1.0 to 1.0)
	 */
	bitDepth: number;

	/**
	 * Channel layout
	 */
	channelLayout: object;

	/**
	 * Samplerate
	 */
	sampleRate: number;

	/**
	 * 
	 * @param channelLayout Constructs a new AudioFormat object.
	 */
	constructor(samplerate: number, bitDepth: number, channelLayout: AudioChannelLayout);

}

/**
 * Represents a single audio track of a multitrack document.
 */
declare class AudioTrack {
	/**
	 * Audio bus track type.
	 */
	static readonly AUDIOTRACKTYPE_BUS: number;

	/**
	 * Audio clip track type.
	 */
	static readonly AUDIOTRACKTYPE_CLIP: number;

	/**
	 * Audio master track type.
	 */
	static readonly AUDIOTRACKTYPE_MASTER: number;

	/**
	 * Unknown track type
	 */
	static readonly AUDIOTRACKTYPE_UNKOWN: number;

	/**
	 * 
	 */
	readonly ancestor: any;

	/**
	 * True if this track is armed for record
	 */
	armed: boolean;

	/**
	 * Collection of all currently selected audio clips of this track.
	 */
	readonly audioClipSelection: AudioClipSelectionCollection;

	/**
	 * Collection of all audio clips of this track.
	 */
	readonly audioClips: AudioClipCollection;

	/**
	 * The audio format of the track (sample rate bit depth channel layout)
	 */
	readonly audioFormat: object;

	/**
	 * Unique id of the track.
	 */
	readonly id: number;

	/**
	 * True if this track is muted
	 */
	mute: boolean;

	/**
	 * Get the name of this track.
	 */
	name: string;

	/**
	 * Selection state of the track.
	 */
	selected: boolean;

	/**
	 * True if this track is soloed
	 */
	solo: boolean;

	/**
	 * Type of the track. The value is one of AUDIOTRACKTYPE_CLIP AUDIOTRACKTYPE_BUS AUDIOTRACKTYPE_MASTER or AUDIOTRACKTYPE_UNKOWN
	 */
	readonly type: number;

	/**
	 * Visibility state of the track.
	 */
	visible: boolean;

	/**
	 * 
	 */
	static addEventListener(): any;

	/**
	 * 
	 */
	static removeEventListener(): any;

}

/**
 * Collection of audio tracks of the according multitrack document.
 */
declare class AudioTrackCollection {
	/**
	 * Returns an audio track by its index
	 */
	readonly index: AudioTrack;

	/**
	 * Number of audio tracks.
	 */
	readonly length: number;

	/**
	 * 
	 * @param layout Add new track
	 */
	add(layout: AudioChannelLayout): AudioTrack;

	/**
	 * 
	 * @param name Return audio track by its name
	 */
	getAudioTrack(name: string): AudioTrack;

	/**
	 * 
	 * @param track Remove track
	 */
	remove(track: AudioTrack): boolean;

}

/**
 * This events is fired if one or more documents related event happened.
 */
declare class AudioTrackEvent {
	/**
	 * This event is fired after a track was added to a multitrack document.
	 */
	static readonly EVENT_ADDED: string;

	/**
	 * This event is fired after a track was removed from a multitrack document.
	 */
	static readonly EVENT_REMOVED: string;

	/**
	 * This event is fired after the selection state of the track changed.
	 */
	static readonly EVENT_SELECTION: string;

	/**
	 * Related document
	 */
	readonly document: object;

	/**
	 * Unique document ID.
	 */
	readonly documentID: string;

	/**
	 * Track name.
	 */
	readonly name: string;

	/**
	 * Document file path.
	 */
	readonly path: string;

	/**
	 * Related track
	 */
	readonly track: object;

	/**
	 * Unique track ID.
	 */
	readonly trackID: number;

}

/**
 * An object representing a particular clip as part of a multitrack session.
 */
declare class Clip {
	/**
	 * 
	 */
	readonly ancestor: any;

	/**
	 * The duration of the clip measured in samples at the multitrack document's sample rate.
	 */
	readonly duration: number;

	/**
	 * The end time of the clip measured in samples (exclusive) at the multitrack document's sample rate.
	 */
	readonly endTime: number;

	/**
	 * Unique id of the clip.
	 */
	readonly id: string;

	/**
	 * Document associated with this clip.
	 */
	link: object;

	/**
	 * The name of the clip.
	 */
	readonly name: string;

	/**
	 * Selection state of this audio clip.
	 */
	readonly selected: boolean;

	/**
	 * The start time of the clip measured in samples at the multitrack document's sample rate.
	 */
	readonly startTime: number;

}

/**
 * This events is fired if active state of the application has changed.
 */
declare class ApplicationActivateEvent {
	/**
	 * This events is fired if active state of the application has changed.
	 */
	static readonly EVENT_ACTIVATE: string;

	/**
	 * Application active state
	 */
	readonly active: boolean;

}

/**
 * An object representing the state of the running application.
 */
declare class Application {
	/**
	 * 謖ｯ蟷⒨ｵｱ險医ヱ繝阪Ν縺ｧ繧ｹ繧ｭ繝｣繝ｳ繧貞ｮ溯｡後＠縺ｾ縺吶\
	 */
	static readonly COMMAND_ANALYSIS_SCANAMPLITUDESTATISTICS: string;

	/**
	 * 蜻ｨ豕｢謨ｰ蛻�梵繝代ロ繝ｫ縺ｧ繧ｹ繧ｭ繝｣繝ｳ繧貞ｮ溯｡後＠縺ｾ縺吶\
	 */
	static readonly COMMAND_ANALYSIS_SCANFREQUENCYANALYSIS: string;

	/**
	 * 1 縺､縺ｮ繧ｯ繝ｪ繝��縺ｮ繧ｹ繝斐�繝√ｒ蛻･縺ｮ繧ｯ繝ｪ繝��縺ｮ繧ｹ繝斐�繝√↓蜷医ｏ縺帙※蜷瑚ｪｿ縺励∪縺吶\
	 */
	static readonly COMMAND_CLIP_ALIGNWITHRUBBADUB: string;

	/**
	 * 繧ｯ繝ｪ繝��繧偵Μ繝溘ャ繧ｯ繧ｹ逕ｨ縺ｫ貅門ｙ縺励∪縺吶\
	 */
	static readonly COMMAND_CLIP_ANALYZEFORRETARGETING: string;

	/**
	 * 驕ｸ謚槭＠縺溘け繝ｪ繝��縺ｮ遘ｻ蜍輔∪縺溘�繝医Μ繝溘Φ繧ｰ譎ゅ↓縲√け繝ｭ繧ｹ繝輔ぉ繝ｼ繝峨ｒ閾ｪ蜍慕噪縺ｫ菴懈�縺吶ｋ縺九←縺�°繧貞�繧頑崛縺医∪縺吶\
	 */
	static readonly COMMAND_CLIP_AUTOMATICCROSSFADESENABLED: string;

	/**
	 * 驕ｸ謚槭＠縺溘け繝ｪ繝��繧剃ｻ悶�縺吶∋縺ｦ縺ｮ繧ｯ繝ｪ繝��縺ｮ蜑埼擇縺ｫ險ｭ螳壹＠縺ｾ縺吶\
	 */
	static readonly COMMAND_CLIP_BRINGTOFRONT: string;

	/**
	 * 驕ｸ謚槭＠縺溘け繝ｪ繝��縺ｾ縺溘�繧ｰ繝ｫ繝ｼ繝励き繝ｩ繝ｼ繧貞､画峩縺吶ｋ縺溘ａ縺ｫ繧ｯ繝ｪ繝��繧ｫ繝ｩ繝ｼ繝\繧､繧｢繝ｭ繧ｰ繧定｡ｨ遉ｺ縺励∪縺吶\
	 */
	static readonly COMMAND_CLIP_CLIPCOLORDIALOG: string;

	/**
	 * 繝励Ο繝代ユ繧｣繝代ロ繝ｫ縺ｧ繧ｯ繝ｪ繝��繧ｲ繧､繝ｳ繧定ｨｭ螳壹＠縺ｾ縺吶\
	 */
	static readonly COMMAND_CLIP_CLIPGAIN: string;

	/**
	 * 驕ｸ謚槭＠縺溘け繝ｪ繝��繧貞盾辣ｧ縺励※繝医Μ繝 縺輔ｌ縺滓眠隕上ヵ繧｡繧､繝ｫ繧剃ｽ懈�縺励∪縺吶\
	 */
	static readonly COMMAND_CLIP_CONVERTTOUNIQUECOPY: string;

	/**
	 * 驕ｸ謚槭＠縺溘け繝ｪ繝��縺ｧ蜿らⅨ縺輔ｌ繧九た繝ｼ繧ｹ繝輔ぃ繧､繝ｫ繧堤ｷｨ髮�＠縺ｾ縺吶\
	 */
	static readonly COMMAND_CLIP_EDITSOURCEFILE: string;

	/**
	 * 繧ｯ繝ｪ繝��縺ｮ繝輔ぉ繝ｼ繝峨う繝ｳ縺ｫ髱槫ｯｾ遘ｰ繧ｯ繝ｭ繧ｹ繝輔ぉ繝ｼ繝峨�繝ｪ繝ｳ繧ｯ繧ｿ繧､繝励ｒ驕ｸ謚槭＠縺ｾ縺吶\
	 */
	static readonly COMMAND_CLIP_FADEINASYMMETRICAL: string;

	/**
	 * 繧ｯ繝ｪ繝��縺ｮ繝輔ぉ繝ｼ繝峨う繝ｳ縺ｫ繧ｳ繧ｵ繧､繝ｳ蠖｢蠑上ｒ驕ｸ謚槭＠縺ｾ縺吶\
	 */
	static readonly COMMAND_CLIP_FADEINCOSINE: string;

	/**
	 * 驕ｸ謚槭＠縺溘け繝ｪ繝��縺ｮ蟾ｦ遶ｯ縺ｧ繧ｯ繝ｭ繧ｹ繝輔ぉ繝ｼ繝峨ｒ菴懈�縺励∪縺吶\
	 */
	static readonly COMMAND_CLIP_FADEINCROSSFADE: string;

	/**
	 * 繧ｯ繝ｪ繝��縺ｮ繝輔ぉ繝ｼ繝峨う繝ｳ縺ｫ繝ｪ繝九い | 蟇ｾ謨ｰ蠖｢蠑上ｒ驕ｸ謚槭＠縺ｾ縺吶\
	 */
	static readonly COMMAND_CLIP_FADEINLINEAR: string;

	/**
	 * 驕ｸ謚槭＠縺溘け繝ｪ繝��縺ｮ繝輔ぉ繝ｼ繝峨う繝ｳ繧貞炎髯､縺励∪縺吶\
	 */
	static readonly COMMAND_CLIP_FADEINNONE: string;

	/**
	 * 驕ｸ謚槭＠縺溘け繝ｪ繝��縺ｮ繝輔ぉ繝ｼ繝峨う繝ｳ繧剃ｽ懈�縺励∪縺吶\
	 */
	static readonly COMMAND_CLIP_FADEINNORMAL: string;

	/**
	 * 繧ｯ繝ｪ繝��縺ｮ繝輔ぉ繝ｼ繝峨う繝ｳ縺ｫ蟇ｾ遘ｰ繧ｯ繝ｭ繧ｹ繝輔ぉ繝ｼ繝峨�繝ｪ繝ｳ繧ｯ繧ｿ繧､繝励ｒ驕ｸ謚槭＠縺ｾ縺吶\
	 */
	static readonly COMMAND_CLIP_FADEINSYMMETRICAL: string;

	/**
	 * 繧ｯ繝ｪ繝��縺ｮ繝輔ぉ繝ｼ繝峨い繧ｦ繝医↓髱槫ｯｾ遘ｰ繧ｯ繝ｭ繧ｹ繝輔ぉ繝ｼ繝峨�繝ｪ繝ｳ繧ｯ繧ｿ繧､繝励ｒ驕ｸ謚槭＠縺ｾ縺吶\
	 */
	static readonly COMMAND_CLIP_FADEOUTASYMMETRICAL: string;

	/**
	 * 繧ｯ繝ｪ繝��縺ｮ繝輔ぉ繝ｼ繝峨い繧ｦ繝医↓繧ｳ繧ｵ繧､繝ｳ蠖｢蠑上ｒ驕ｸ謚槭＠縺ｾ縺吶\
	 */
	static readonly COMMAND_CLIP_FADEOUTCOSINE: string;

	/**
	 * 驕ｸ謚槭＠縺溘け繝ｪ繝��縺ｮ蜿ｳ遶ｯ縺ｧ繧ｯ繝ｭ繧ｹ繝輔ぉ繝ｼ繝峨ｒ菴懈�縺励∪縺吶\
	 */
	static readonly COMMAND_CLIP_FADEOUTCROSSFADE: string;

	/**
	 * 繧ｯ繝ｪ繝��縺ｮ繝輔ぉ繝ｼ繝峨い繧ｦ繝医↓繝ｪ繝九い | 蟇ｾ謨ｰ蠖｢蠑上ｒ驕ｸ謚槭＠縺ｾ縺吶\
	 */
	static readonly COMMAND_CLIP_FADEOUTLINEAR: string;

	/**
	 * 驕ｸ謚槭＠縺溘け繝ｪ繝��縺ｮ繝輔ぉ繝ｼ繝峨い繧ｦ繝医ｒ蜑企勁縺励∪縺吶\
	 */
	static readonly COMMAND_CLIP_FADEOUTNONE: string;

	/**
	 * 驕ｸ謚槭＠縺溘け繝ｪ繝��縺ｮ繝輔ぉ繝ｼ繝峨い繧ｦ繝医ｒ菴懈�縺励∪縺吶\
	 */
	static readonly COMMAND_CLIP_FADEOUTNORMAL: string;

	/**
	 * 繧ｯ繝ｪ繝��縺ｮ繝輔ぉ繝ｼ繝峨い繧ｦ繝医↓蟇ｾ遘ｰ繧ｯ繝ｭ繧ｹ繝輔ぉ繝ｼ繝峨�繝ｪ繝ｳ繧ｯ繧ｿ繧､繝励ｒ驕ｸ謚槭＠縺ｾ縺吶\
	 */
	static readonly COMMAND_CLIP_FADEOUTSYMMETRICAL: string;

	/**
	 * 驕ｸ謚槭＠縺溘け繝ｪ繝��繧偵げ繝ｫ繝ｼ繝励↓蜷ｫ繧√ｋ縺九←縺�°繧貞�繧頑崛縺医∪縺吶\
	 */
	static readonly COMMAND_CLIP_GROUPCLIPS: string;

	/**
	 * 縺吶∋縺ｦ縺ｮ繧ｪ繝輔Λ繧､繝ｳ繧ｯ繝ｪ繝��繧偵Γ繝�ぅ繧｢縺ｫ蜀肴磁邯壹＠縺ｾ縺吶\
	 */
	static readonly COMMAND_CLIP_LINKALLMEDIA: string;

	/**
	 * 驕ｸ謚槭＠縺溘が繝輔Λ繧､繝ｳ繧ｯ繝ｪ繝��繧偵Γ繝�ぅ繧｢縺ｫ蜀肴磁邯壹＠縺ｾ縺吶\
	 */
	static readonly COMMAND_CLIP_LINKMEDIA: string;

	/**
	 * 驕ｸ謚槭＠縺溘け繝ｪ繝��縺ｮ髢句ｧ区凾髢薙ｒ繝ｭ繝�け縺励∪縺吶\
	 */
	static readonly COMMAND_CLIP_LOCKINTIME: string;

	/**
	 * 繧ｯ繝ｪ繝��縺ｮ繝ｫ繝ｼ繝励ｒ譛牙柑縺ｫ縺励∪縺吶\
	 */
	static readonly COMMAND_CLIP_LOOP: string;

	/**
	 * 繧ｯ繝ｪ繝��縺ｮ繧ｰ繝ｫ繝ｼ繝励�繝ｩ繧ｦ繝峨ロ繧ｹ繧剃ｸ\閾ｴ縺輔○縺ｾ縺吶\
	 */
	static readonly COMMAND_CLIP_MATCHCLIPVOLUME: string;

	/**
	 * 驕ｸ謚槭＠縺溘け繝ｪ繝��繧堤ｵｱ蜷医＠縺ｾ縺吶\
	 */
	static readonly COMMAND_CLIP_MERGECLIPS: string;

	/**
	 * 驕ｸ謚槭＠縺溘け繝ｪ繝��繧偵Α繝･繝ｼ繝医＠縺ｾ縺吶\
	 */
	static readonly COMMAND_CLIP_MUTE: string;

	/**
	 * 驕ｸ謚槭＠縺溘け繝ｪ繝��繧呈ｬ｡縺ｮ繝医Λ繝�け縺ｫ遘ｻ蜍輔＠縺ｾ縺吶\
	 */
	static readonly COMMAND_CLIP_NUDGEDOWN: string;

	/**
	 * 驕ｸ謚槭＠縺溘け繝ｪ繝��繧貞ｷｦ縺ｫ遘ｻ蜍輔＠縺ｾ縺� (繝輔Ξ繝ｼ繝 縺ｸ縺ｮ繧ｹ繝翫ャ繝励′譛牙柑縺ｪ蝣ｴ蜷医�繝輔Ξ繝ｼ繝 蜊倅ｽ�)縲
	 */
	static readonly COMMAND_CLIP_NUDGELEFT: string;

	/**
	 * 驕ｸ謚槭＠縺溘け繝ｪ繝��繧貞ｷｦ縺ｫ 5 蜊倅ｽ咲ｧｻ蜍輔＠縺ｾ縺� (繝輔Ξ繝ｼ繝 縺ｸ縺ｮ繧ｹ繝翫ャ繝励′譛牙柑縺ｪ蝣ｴ蜷医�繝輔Ξ繝ｼ繝 蜊倅ｽ�)縲
	 */
	static readonly COMMAND_CLIP_NUDGELEFT5: string;

	/**
	 * 驕ｸ謚槭＠縺溘け繝ｪ繝��繧貞承縺ｫ遘ｻ蜍輔＠縺ｾ縺� (繝輔Ξ繝ｼ繝 縺ｸ縺ｮ繧ｹ繝翫ャ繝励′譛牙柑縺ｪ蝣ｴ蜷医�繝輔Ξ繝ｼ繝 蜊倅ｽ�)縲
	 */
	static readonly COMMAND_CLIP_NUDGERIGHT: string;

	/**
	 * 驕ｸ謚槭＠縺溘け繝ｪ繝��繧貞承縺ｫ 5 蜊倅ｽ咲ｧｻ蜍輔＠縺ｾ縺� (繝輔Ξ繝ｼ繝 縺ｸ縺ｮ繧ｹ繝翫ャ繝励′譛牙柑縺ｪ蝣ｴ蜷医�繝輔Ξ繝ｼ繝 蜊倅ｽ�)縲
	 */
	static readonly COMMAND_CLIP_NUDGERIGHT5: string;

	/**
	 * 驕ｸ謚槭＠縺溘け繝ｪ繝��繧貞燕縺ｮ繝医Λ繝�け縺ｫ遘ｻ蜍輔＠縺ｾ縺吶\
	 */
	static readonly COMMAND_CLIP_NUDGEUP: string;

	/**
	 * 繝輔か繝ｼ繧ｫ繧ｹ繧ｯ繝ｪ繝��繧堤樟蝨ｨ縺ｮ繧ｰ繝ｫ繝ｼ繝励°繧牙炎髯､縺励∪縺吶\
	 */
	static readonly COMMAND_CLIP_REMOVEFOCUSCLIPFROMGROUP: string;

	/**
	 * 驕ｸ謚槭＠縺溘け繝ｪ繝��縺ｮ蜷榊燕繧偵�繝ｭ繝代ユ繧｣繝代ロ繝ｫ縺ｧ螟画峩縺励∪縺吶\
	 */
	static readonly COMMAND_CLIP_RENAME: string;

	/**
	 * 繝励Ο繝代ユ繧｣繝代ロ繝ｫ縺ｧ繧ｯ繝ｪ繝��縺ｮ繝ｪ繝溘ャ繧ｯ繧ｹ繝代Λ繝｡繝ｼ繧ｿ繝ｼ繧定ｪｿ謨ｴ縺励∪縺吶\
	 */
	static readonly COMMAND_CLIP_RETARGETPROPERTIES: string;

	/**
	 * 驕ｸ謚槭＠縺溘け繝ｪ繝��縺ｮ繧ｽ繝ｼ繧ｹ繧偵ヵ繧｡繧､繝ｫ繝代ロ繝ｫ縺ｧ陦ｨ遉ｺ縺励∪縺吶\
	 */
	static readonly COMMAND_CLIP_REVEALCLIPSINFILESPANEL: string;

	/**
	 * 繝ｪ繝溘ャ繧ｯ繧ｹ縺励◆繧ｯ繝ｪ繝��繧貞❼縺ｮ迥ｶ諷九↓謌ｻ縺励∪縺吶\
	 */
	static readonly COMMAND_CLIP_REVERTRETARGETEDCLIPTOORIGINAL: string;

	/**
	 * 驕ｸ謚槭＠縺溘け繝ｪ繝��繧剃ｻ悶�縺吶∋縺ｦ縺ｮ繧ｯ繝ｪ繝��縺ｮ閭碁擇縺ｫ遘ｻ蜍輔＠縺ｾ縺吶\
	 */
	static readonly COMMAND_CLIP_SENDTOBACK: string;

	/**
	 * 驕ｸ謚槭＠縺溘け繝ｪ繝��蜀⒤�辟｡髻ｳ譎る俣驕ｸ謚樒ｯ�峇縲
	 */
	static readonly COMMAND_CLIP_SILENCESELECTEDCLIPSINRANGE: string;

	/**
	 * 驕ｸ謚槭＠縺溘け繝ｪ繝��繧偵せ繝励Μ繝�ヨ縺励∪縺吶\
	 */
	static readonly COMMAND_CLIP_SPLIT: string;

	/**
	 * 迴ｾ蝨ｨ驕ｸ謚槭＆繧後※縺�ｋ繧ｯ繝ｪ繝��繧堤┌隕悶＠縺ｦ縲∝�逕溘�繝�ラ縺ｮ荳九�縺吶∋縺ｦ縺ｮ繧ｯ繝ｪ繝��繧貞�蜑ｲ縺励∪縺吶\
	 */
	static readonly COMMAND_CLIP_SPLITALL: string;

	/**
	 * 繝ｪ繝溘ャ繧ｯ繧ｹ縺励◆繧ｯ繝ｪ繝��繧貞❼縺ｮ繧ｻ繧ｰ繝｡繝ｳ繝医↓蛻�牡縺励∪縺吶\
	 */
	static readonly COMMAND_CLIP_SPLITRETARGETEDCLIPINTOSEGMENTS: string;

	/**
	 * 繝励Ο繝代ユ繧｣繝代ロ繝ｫ繧剃ｽｿ逕ｨ縺励※繧ｯ繝ｪ繝��縺ｮ繧ｹ繝医Ξ繝�メ縺ｮ繝励Ο繝代ユ繧｣繧貞､画峩縺励∪縺吶\
	 */
	static readonly COMMAND_CLIP_STRETCHPROPERTIES: string;

	/**
	 * 蜈ｨ菴薙↓驕ｩ逕ｨ縺輔ｌ繧九\√げ繝ｫ繝ｼ繝励�閾ｪ蜍暮∈謚槭ｒ荳\譎りｧ｣髯､縺吶ｋ蛻�ｊ譖ｿ縺医〒縺吶\ゅ％繧後↓繧医ｊ繧ｰ繝ｫ繝ｼ繝怜�縺ｮ繧ｯ繝ｪ繝��繧貞\句挨縺ｫ驕ｸ謚槭〒縺阪∪縺吶\
	 */
	static readonly COMMAND_CLIP_SUSPENDGROUPINGTOGGLE: string;

	/**
	 * 驕ｸ謚槭＆繧後◆繧ｯ繝ｪ繝��縺ｮ繧､繝ｳ繝昴う繝ｳ繝医ｒ蜀咲函繝倥ャ繝峨↓繝医Μ繝溘Φ繧ｰ縺励∪縺吶\
	 */
	static readonly COMMAND_CLIP_TRIMHEADTOCTI: string;

	/**
	 * 驕ｸ謚槭＆繧後◆繧ｯ繝ｪ繝��縺ｮ繧｢繧ｦ繝医�繧､繝ｳ繝医ｒ蜀咲函繝倥ャ繝峨↓繝医Μ繝溘Φ繧ｰ縺励∪縺吶\
	 */
	static readonly COMMAND_CLIP_TRIMTAILTOCTI: string;

	/**
	 * 驕ｸ謚槭＠縺溘け繝ｪ繝��繧呈凾髢馴∈謚樒ｯ�峇縺ｫ繝医Μ繝溘Φ繧ｰ縺励∪縺吶\
	 */
	static readonly COMMAND_CLIP_TRIMTOTIMESELECTION: string;

	/**
	 * 驕ｸ謚槭＠縺溘け繝ｪ繝��繧偵◎繧後◇繧後�繧ｰ繝ｫ繝ｼ繝励°繧牙炎髯､縺励∪縺吶\
	 */
	static readonly COMMAND_CLIP_UNGROUPSELECTEDCLIPS: string;

	/**
	 * 
	 */
	static readonly COMMAND_DEBUG_DETECTHANGS: string;

	/**
	 * 迴ｾ蝨ｨ縺ｮ繧ｯ繝ｪ繝��繝懊�繝峨ｒ繧ｯ繝ｪ繝��繝懊�繝� 1 縺ｫ險ｭ螳壹＠縺ｾ縺吶\
	 */
	static readonly COMMAND_EDIT_ACTIVATECLIPBOARD1: string;

	/**
	 * 迴ｾ蝨ｨ縺ｮ繧ｯ繝ｪ繝��繝懊�繝峨ｒ繧ｯ繝ｪ繝��繝懊�繝� 2 縺ｫ險ｭ螳壹＠縺ｾ縺吶\
	 */
	static readonly COMMAND_EDIT_ACTIVATECLIPBOARD2: string;

	/**
	 * 迴ｾ蝨ｨ縺ｮ繧ｯ繝ｪ繝��繝懊�繝峨ｒ繧ｯ繝ｪ繝��繝懊�繝� 3 縺ｫ險ｭ螳壹＠縺ｾ縺吶\
	 */
	static readonly COMMAND_EDIT_ACTIVATECLIPBOARD3: string;

	/**
	 * 迴ｾ蝨ｨ縺ｮ繧ｯ繝ｪ繝��繝懊�繝峨ｒ繧ｯ繝ｪ繝��繝懊�繝� 4 縺ｫ險ｭ螳壹＠縺ｾ縺吶\
	 */
	static readonly COMMAND_EDIT_ACTIVATECLIPBOARD4: string;

	/**
	 * 迴ｾ蝨ｨ縺ｮ繧ｯ繝ｪ繝��繝懊�繝峨ｒ繧ｯ繝ｪ繝��繝懊�繝� 5 縺ｫ險ｭ螳壹＠縺ｾ縺吶\
	 */
	static readonly COMMAND_EDIT_ACTIVATECLIPBOARD5: string;

	/**
	 * CART 繧ｿ繧､繝槭�繝槭�繧ｫ繝ｼ繧定ｿｽ蜉 縺励∪縺吶\
	 */
	static readonly COMMAND_EDIT_ADDCARTMARKER: string;

	/**
	 * 繧ｭ繝･繝ｼ繝槭�繧ｫ繝ｼ繧定ｿｽ蜉 縺励∪縺吶\
	 */
	static readonly COMMAND_EDIT_ADDCUEMARKER: string;

	/**
	 * 繧ｭ繝･繝ｼ繝昴う繝ｳ繝医�繝ｼ繧ｫ繝ｼ繧定ｿｽ蜉 縺励∪縺吶\
	 */
	static readonly COMMAND_EDIT_ADDCUEPOINTMARKER: string;

	/**
	 * 繧ｭ繝･繝ｼ遽�峇繝槭�繧ｫ繝ｼ繧定ｿｽ蜉 縺励∪縺吶\
	 */
	static readonly COMMAND_EDIT_ADDCUERANGEMARKER: string;

	/**
	 * 繧ｵ繝悶け繝ｪ繝��繝槭�繧ｫ繝ｼ繧定ｿｽ蜉 縺励∪縺吶\
	 */
	static readonly COMMAND_EDIT_ADDSUBCLIPMARKER: string;

	/**
	 * CD 繝医Λ繝�け繝槭�繧ｫ繝ｼ繧定ｿｽ蜉 縺励∪縺吶\
	 */
	static readonly COMMAND_EDIT_ADDTRACKMARKER: string;

	/**
	 * 驕ｸ謚樒ｯ�峇縺ｮ繧､繝ｳ繝昴う繝ｳ繝医ｒ蜈磯 ｭ縺ｸ隱ｿ謨ｴ縺励∪縺吶\
	 */
	static readonly COMMAND_EDIT_ADJUSTINPOINTTOBEGINNING: string;

	/**
	 * 驕ｸ謚樒ｯ�峇縺ｮ繧､繝ｳ繝昴う繝ｳ繝医ｒ譛ｫ蟆ｾ縺ｸ隱ｿ謨ｴ縺励∪縺吶\
	 */
	static readonly COMMAND_EDIT_ADJUSTINPOINTTOEND: string;

	/**
	 * 驕ｸ謚樒ｯ�峇縺ｮ繧､繝ｳ繝昴う繝ｳ繝医ｒ蟾ｦ縺ｸ隱ｿ謨ｴ縺励∪縺吶\
	 */
	static readonly COMMAND_EDIT_ADJUSTINPOINTTOLEFT: string;

	/**
	 * 驕ｸ謚樒ｯ�峇縺ｮ繧､繝ｳ繝昴う繝ｳ繝医ｒ蜿ｳ縺ｸ隱ｿ謨ｴ縺励∪縺吶\
	 */
	static readonly COMMAND_EDIT_ADJUSTINPOINTTORIGHT: string;

	/**
	 * 蟾ｦ遶ｯ繧貞ｷｦ縺ｫ隱ｿ謨ｴ
	 */
	static readonly COMMAND_EDIT_ADJUSTLEFTSIDETOLEFT: string;

	/**
	 * 蟾ｦ遶ｯ繧貞承縺ｫ隱ｿ謨ｴ
	 */
	static readonly COMMAND_EDIT_ADJUSTLEFTSIDETORIGHT: string;

	/**
	 * 驕ｸ謚樒ｯ�峇縺ｮ繧｢繧ｦ繝医�繧､繝ｳ繝医ｒ蜈磯 ｭ縺ｸ隱ｿ謨ｴ縺励∪縺吶\
	 */
	static readonly COMMAND_EDIT_ADJUSTOUTPOINTTOBEGINNING: string;

	/**
	 * 驕ｸ謚樒ｯ�峇縺ｮ繧｢繧ｦ繝医�繧､繝ｳ繝医ｒ譛ｫ蟆ｾ縺ｸ隱ｿ謨ｴ縺励∪縺吶\
	 */
	static readonly COMMAND_EDIT_ADJUSTOUTPOINTTOEND: string;

	/**
	 * 驕ｸ謚樒ｯ�峇縺ｮ繧｢繧ｦ繝医�繧､繝ｳ繝医ｒ蟾ｦ縺ｸ隱ｿ謨ｴ縺励∪縺吶\
	 */
	static readonly COMMAND_EDIT_ADJUSTOUTPOINTTOLEFT: string;

	/**
	 * 驕ｸ謚樒ｯ�峇縺ｮ繧｢繧ｦ繝医�繧､繝ｳ繝医ｒ蜿ｳ縺ｸ隱ｿ謨ｴ縺励∪縺吶\
	 */
	static readonly COMMAND_EDIT_ADJUSTOUTPOINTTORIGHT: string;

	/**
	 * 蜿ｳ遶ｯ繧貞ｷｦ縺ｫ隱ｿ謨ｴ
	 */
	static readonly COMMAND_EDIT_ADJUSTRIGHTSIDETOLEFT: string;

	/**
	 * 蜿ｳ遶ｯ繧貞承縺ｫ隱ｿ謨ｴ
	 */
	static readonly COMMAND_EDIT_ADJUSTRIGHTSIDETORIGHT: string;

	/**
	 * 驕ｸ謚樒ｯ�峇繧貞�蛛ｴ縺ｫ隱ｿ謨ｴ縺励∪縺吶\
	 */
	static readonly COMMAND_EDIT_ADJUSTSELECTIONINWARD: string;

	/**
	 * 驕ｸ謚樒ｯ�峇繧貞､門�縺ｫ隱ｿ謨ｴ縺励∪縺吶\
	 */
	static readonly COMMAND_EDIT_ADJUSTSELECTIONOUTWARD: string;

	/**
	 * 繝舌ャ繝∝㍎逅�ヱ繝阪Ν繧帝幕縺阪∪縺吶\
	 */
	static readonly COMMAND_EDIT_BATCHPROCESS: string;

	/**
	 * 迴ｾ蝨ｨ縺ｮ驕ｸ謚槭＆繧後◆繧ｯ繝ｪ繝��縺ｮ繧ｹ繝医Ξ繝�メ繝｢繝ｼ繝峨ｒ繧ｪ繝輔↓螟画峩縺励∪縺吶\
	 */
	static readonly COMMAND_EDIT_CHANGESTRETCHMODE_OFF: string;

	/**
	 * 迴ｾ蝨ｨ縺ｮ驕ｸ謚槭＆繧後◆繧ｯ繝ｪ繝��縺ｮ繧ｹ繝医Ξ繝�メ繝｢繝ｼ繝峨ｒ繝ｪ繧｢繝ｫ繧ｿ繧､繝 縺ｫ螟画峩縺励∪縺吶\
	 */
	static readonly COMMAND_EDIT_CHANGESTRETCHMODE_REALTIME: string;

	/**
	 * 迴ｾ蝨ｨ縺ｮ驕ｸ謚槭＆繧後◆繧ｯ繝ｪ繝��縺ｮ繧ｹ繝医Ξ繝�メ繝｢繝ｼ繝峨ｒ繝ｬ繝ｳ繝\繝ｪ繝ｳ繧ｰ縺ｫ螟画峩縺励∪縺吶\
	 */
	static readonly COMMAND_EDIT_CHANGESTRETCHMODE_RENDERED: string;

	/**
	 * 蜀咲函繝倥ャ繝峨�菴咲ｽｮ繧貞､画峩縺帙★縺ｫ譎る俣驕ｸ謚槭ｒ隗｣髯､縺励∪縺吶\
	 */
	static readonly COMMAND_EDIT_CLEARTIMESELECTION: string;

	/**
	 * 迴ｾ蝨ｨ縺ｮ繝輔ぃ繧､繝ｫ縺ｮ繧ｵ繝ｳ繝励Ν繧ｿ繧､繝励ｒ螟画鋤縺励∪縺吶\
	 */
	static readonly COMMAND_EDIT_CONVERTSAMPLETYPE: string;

	/**
	 * 迴ｾ蝨ｨ縺ｮ驕ｸ謚樒ｯ�峇繧偵け繝ｪ繝��繝懊�繝峨↓繧ｳ繝斐�縲
	 */
	static readonly COMMAND_EDIT_COPY: string;

	/**
	 * 迴ｾ蝨ｨ縺ｮ驕ｸ謚樒ｯ�峇繧偵け繝ｪ繝��繝懊�繝峨↓繧ｳ繝斐�縺励※縺九ｉ譁ｰ縺励＞繝輔ぃ繧､繝ｫ縺ｫ繝壹�繧ｹ繝医＠縺ｾ縺吶\
	 */
	static readonly COMMAND_EDIT_COPYTONEW: string;

	/**
	 * 迴ｾ蝨ｨ縺ｮ驕ｸ謚樒ｯ�峇繧剃ｽｿ逕ｨ縺励※迴ｾ蝨ｨ縺ｮ繝輔ぃ繧､繝ｫ繧貞�繧頑栢縺阪∪縺吶\
	 */
	static readonly COMMAND_EDIT_CROP: string;

	/**
	 * 迴ｾ蝨ｨ縺ｮ驕ｸ謚樒ｯ�峇繧偵き繝�ヨ縺励∪縺吶\
	 */
	static readonly COMMAND_EDIT_CUT: string;

	/**
	 * 迴ｾ蝨ｨ縺ｮ驕ｸ謚樒ｮ㍽園縺ｫ蠢懊§縺ｦ蜑企勁縺励∪縺吶\
	 */
	static readonly COMMAND_EDIT_DELETE: string;

	/**
	 * 迴ｾ蝨ｨ縺ｮ繝輔ぃ繧､繝ｫ縺九ｉ縺吶∋縺ｦ縺ｮ繝槭�繧ｫ繝ｼ繧貞炎髯､縺励∪縺吶\
	 */
	static readonly COMMAND_EDIT_DELETEALLMARKERS: string;

	/**
	 * 繝槭�繧ｫ繝ｼ繝代ロ繝ｫ縺ｧ驕ｸ謚槭＠縺溘�繝ｼ繧ｫ繝ｼ繧貞炎髯､縺励∪縺吶\
	 */
	static readonly COMMAND_EDIT_DELETESELECTEDMARKERS: string;

	/**
	 * 驕ｸ謚樒ｯ�峇繧定ｧ｣髯､縺励∪縺吶\ゅ�繝ｫ繝√ヨ繝ｩ繝�け繧ｨ繝�ぅ繧ｿ繝ｼ縺ｧ縺ｯ縲√☆縺ｹ縺ｦ縺ｮ繧ｯ繝ｪ繝��繧帝∈謚櫁ｧ｣髯､縺励∪縺吶\よｳ｢蠖｢繧ｨ繝�ぅ繧ｿ繝ｼ縺ｧ縺ｯ縲√☆縺ｹ縺ｦ縺ｮ繧ｪ繝ｼ繝�ぅ繧ｪ繧ｵ繝ｳ繝励Ν繧帝∈謚櫁ｧ｣髯､縺励∪縺吶\
	 */
	static readonly COMMAND_EDIT_DESELECTALL: string;

	/**
	 * 縺薙�繝輔ぃ繧､繝ｫ繧剃ｽ懈�縺励◆蜈��繝励Ο繧ｸ繧ｧ繧ｯ繝医ｒ髢九″縺ｾ縺吶\
	 */
	static readonly COMMAND_EDIT_EDITORIGINAL: string;

	/**
	 * 驕ｸ謚槭＠縺溽ｯ�峇繝槭�繧ｫ繝ｼ縺ｮ繧ｪ繝ｼ繝�ぅ繧ｪ繧貞\句挨縺ｮ繝輔ぃ繧､繝ｫ縺ｫ譖ｸ縺榊�縺励∪縺吶\
	 */
	static readonly COMMAND_EDIT_EXPORTMARKERRANGES: string;

	/**
	 * 蜻ｨ豕｢謨ｰ繝舌Φ繝峨ｒ繝輔ぃ繧､繝ｫ縺ｫ蛻�牡縺励∪縺吶\
	 */
	static readonly COMMAND_EDIT_FREQUENCYBANDSPLITTER: string;

	/**
	 * 謖㍾ｮ壹＠縺溘ヵ繧｡繧､繝ｫ繧定ｪｭ縺ｿ霎ｼ縺ｿ縲√い繧ｯ繝�ぅ繝悶↑ CD 繝ｬ繧､繧｢繧ｦ繝医↓ CD 繝医Λ繝�け縺ｨ縺励※謖ｿ蜈･縺励∪縺吶\
	 */
	static readonly COMMAND_EDIT_IMPORTANDINSERTFILESASCDTRACKS: string;

	/**
	 * 繧｢繧ｯ繝�ぅ繝悶↑繝輔ぃ繧､繝ｫ繧呈眠隕� CD 繝ｬ繧､繧｢繧ｦ繝医↓謖ｿ蜈･縺励∪縺吶\
	 */
	static readonly COMMAND_EDIT_INSERTINTONEWCDLAYOUT: string;

	/**
	 * 繧｢繧ｯ繝�ぅ繝悶↑繝輔ぃ繧､繝ｫ繧呈眠隕上�繝ｫ繝√ヨ繝ｩ繝�け繧ｻ繝�す繝ｧ繝ｳ縺ｫ謖ｿ蜈･縺励∪縺吶\
	 */
	static readonly COMMAND_EDIT_INSERTINTONEWSESSION: string;

	/**
	 * 繧｢繧ｯ繝�ぅ繝悶↑繝輔ぃ繧､繝ｫ縺ｾ縺溘�驕ｸ謚槫ｯｾ雎｡繧偵\∵怙蠕後↓菴ｿ逕ｨ縺励◆繧ｻ繝�す繝ｧ繝ｳ縲√∪縺溘�譌｢蟄倥�繧ｻ繝�す繝ｧ繝ｳ縺後↑縺� ｴ蜷医�譁ｰ縺励＞繧ｻ繝�す繝ｧ繝ｳ縺ｫ謖ｿ蜈･縺励∪縺吶\
	 */
	static readonly COMMAND_EDIT_INSERTINTOSESSION: string;

	/**
	 * 繝槭�繧ｫ繝ｼ繝代ロ繝ｫ縺ｮ驕ｸ謚槭＠縺溽ｯ�峇繝槭�繧ｫ繝ｼ繧貞�逕溘Μ繧ｹ繝医↓謖ｿ蜈･縺励∪縺吶\
	 */
	static readonly COMMAND_EDIT_INSERTSELECTEDRANGEMARKERSINTOPLAYLIST: string;

	/**
	 * 迴ｾ蝨ｨ縺ｮ繝輔ぃ繧､繝ｫ縺ｫ辟｡髻ｳ繧呈諺蜈･縺励∪縺吶\
	 */
	static readonly COMMAND_EDIT_INSERTSILENCE: string;

	/**
	 * 迴ｾ蝨ｨ縺ｮ繝輔ぃ繧､繝ｫ縺ｮ蜀咲函縺ｫ蛻･縺ｮ繧ｵ繝ｳ繝励Ν繝ｬ繝ｼ繝医ｒ菴ｿ逕ｨ縺励∪縺吶\
	 */
	static readonly COMMAND_EDIT_INTERPRETSAMPLERATE: string;

	/**
	 * 繝槭�繧ｫ繝ｼ繝代ロ繝ｫ縺ｧ驕ｸ謚槭＠縺溘�繝ｼ繧ｫ繝ｼ繧� 蜊倅ｸ\ (縺ｾ縺溘�隍㍽焚) 縺ｮ遽�峇繝槭�繧ｫ繝ｼ縺ｫ邨仙粋縺励∪縺吶\
	 */
	static readonly COMMAND_EDIT_MERGESELECTEDMARKERS: string;

	/**
	 * 繧ｯ繝ｪ繝��繝懊�繝峨�蜀⒦ｮｹ繧偵ヵ繧｡繧､繝ｫ縺ｫ繝溘ャ繧ｯ繧ｹ縺励∪縺吶\
	 */
	static readonly COMMAND_EDIT_MIXPASTE: string;

	/**
	 * 繧ｯ繝ｪ繝��繝懊�繝峨�蜀⒦ｮｹ繧偵ヵ繧｡繧､繝ｫ縺ｫ繝壹�繧ｹ繝医＠縺ｾ縺吶\
	 */
	static readonly COMMAND_EDIT_PASTE: string;

	/**
	 * 繧ｯ繝ｪ繝��繝懊�繝峨�蜀⒦ｮｹ繧呈眠縺励＞繝輔ぃ繧､繝ｫ縺ｫ繝壹�繧ｹ繝医＠縺ｾ縺吶\
	 */
	static readonly COMMAND_EDIT_PASTETONEW: string;

	/**
	 * 縺吶∋縺ｦ縺ｮ繝ｬ繝ｳ繝\繝ｪ繝ｳ繧ｰ繧ｹ繝医Ξ繝�メ縺輔ｌ縺溘け繝ｪ繝��繧偵Μ繧｢繝ｫ繧ｿ繧､繝 蜃ｦ逅�↓蛻�ｊ譖ｿ縺医∪縺吶\
	 */
	static readonly COMMAND_EDIT_REALTIMEALLSTRETCHEDCLIPS: string;

	/**
	 * 譛\蠕後�謫堺ｽ懊ｒ繧�ｊ逶ｴ縺励∪縺吶\
	 */
	static readonly COMMAND_EDIT_REDO: string;

	/**
	 * 繝槭�繧ｫ繝ｼ繝代ロ繝ｫ縺ｧ驕ｸ謚槭＠縺溘�繝ｼ繧ｫ繝ｼ縺ｮ蜷榊燕繧貞､画峩縺励∪縺吶\
	 */
	static readonly COMMAND_EDIT_RENAMESELECTEDMARKER: string;

	/**
	 * 繝ｪ繧｢繝ｫ繧ｿ繧､繝 繧ｹ繝医Ξ繝�メ縺輔ｌ縺溘☆縺ｹ縺ｦ縺ｮ繧ｯ繝ｪ繝��繧偵Ξ繝ｳ繝\繝ｪ繝ｳ繧ｰ蜃ｦ逅�↓蛻�ｊ譖ｿ縺医∪縺吶\
	 */
	static readonly COMMAND_EDIT_RENDERALLSTRETCHEDCLIPS: string;

	/**
	 * 譛\蠕後↓驕ｸ謚槭＠縺溘さ繝槭Φ繝峨ｒ郢ｰ繧願ｿ斐＠縺ｾ縺吶\ょ庄閭ｽ縺ｪ蝣ｴ蜷医�繝\繧､繧｢繝ｭ繧ｰ縺瑚｡ｨ遉ｺ縺輔ｌ縲�←逕ｨ蜑阪↓險ｭ螳壹ｒ隱ｿ謨ｴ縺ｧ縺阪∪縺吶\
	 */
	static readonly COMMAND_EDIT_REPEATLASTCOMMAND: string;

	/**
	 * 譛\蠕後↓驕ｸ謚槭＠縺溘さ繝槭Φ繝峨ｒ郢ｰ繧願ｿ斐＠縺ｾ縺吶\ゅム繧､繧｢繝ｭ繧ｰ縺ｯ陦ｨ遉ｺ縺輔ｌ縺ｾ縺帙ｓ縲
	 */
	static readonly COMMAND_EDIT_REPEATLASTCOMMANDNOUI: string;

	/**
	 * 驕ｸ謚槭＠縺溘ヨ繝ｩ繝�け蜀⒤�迴ｾ蝨ｨ縺ｮ蜀咲函繝倥ャ繝我ｽ咲ｽｮ縺ｮ遨ｺ逋ｽ驛ｨ蛻�ｒ蜑企勁縺励\√さ繝ｳ繝�Φ繝�ｒ遘ｻ蜍輔＠縺ｦ遨ｺ逋ｽ驛ｨ蛻�ｒ縺ｪ縺上＠縺ｾ縺吶\
	 */
	static readonly COMMAND_EDIT_RIPPLEDELETEGAPINSELECTEDTRACK: string;

	/**
	 * 驕ｸ謚槭＠縺溘け繝ｪ繝��縺ｮ蜑企勁蠕後↓繧ｳ繝ｳ繝�Φ繝�ｒ遘ｻ蜍輔＠縺ｦ遨ｺ逋ｽ驛ｨ蛻�ｒ縺ｪ縺上＠縺ｾ縺吶\
	 */
	static readonly COMMAND_EDIT_RIPPLEDELETESELECTEDCLIPS: string;

	/**
	 * 縺吶∋縺ｦ縺ｮ繝医Λ繝�け蜀⒤�譎る俣驕ｸ謚樒ｯ�峇繧貞炎髯､縺励◆蠕後↓縲√さ繝ｳ繝�Φ繝�ｒ遘ｻ蜍輔＠縺ｦ遨ｺ逋ｽ驛ｨ蛻�ｒ縺ｪ縺上＠縺ｾ縺吶\
	 */
	static readonly COMMAND_EDIT_RIPPLEDELETETIMESELECTIONINALLTRACKS: string;

	/**
	 * 驕ｸ謚槭＠縺溘け繝ｪ繝��蜀⒤�譎る俣驕ｸ謚樒ｯ�峇繧貞炎髯､縺励\√さ繝ｳ繝�Φ繝�ｒ遘ｻ蜍輔＠縺ｦ遨ｺ逋ｽ驛ｨ蛻�ｒ縺ｪ縺上＠縺ｾ縺吶\
	 */
	static readonly COMMAND_EDIT_RIPPLEDELETETIMESELECTIONINSELECTEDCLIPS: string;

	/**
	 * 驕ｸ謚槭＠縺溘ヨ繝ｩ繝�け蜀⒤�譎る俣驕ｸ謚樒ｯ�峇繧貞炎髯､縺励◆蠕後↓縲√さ繝ｳ繝�Φ繝�ｒ遘ｻ蜍輔＠縺ｦ遨ｺ逋ｽ驛ｨ蛻�ｒ縺ｪ縺上＠縺ｾ縺吶\
	 */
	static readonly COMMAND_EDIT_RIPPLEDELETETIMESELECTIONINSELECTEDTRACK: string;

	/**
	 * 繧｢繧ｯ繝�ぅ繝悶↑繝代ロ繝ｫ縺ｮ縺吶∋縺ｦ縺ｮ繧ｳ繝ｳ繝�Φ繝�ｒ驕ｸ謚槭＠縺ｾ縺吶\ゅ�繝ｫ繝√ヨ繝ｩ繝�け繧ｨ繝�ぅ繧ｿ繝ｼ縺ｧ縺ｯ縲√☆縺ｹ縺ｦ縺ｮ繧ｯ繝ｪ繝��繧帝∈謚槭＠縺ｾ縺吶\よｳ｢蠖｢繧ｨ繝�ぅ繧ｿ繝ｼ縺ｧ縺ｯ縲√☆縺ｹ縺ｦ縺ｮ繧ｪ繝ｼ繝�ぅ繧ｪ繧ｵ繝ｳ繝励Ν繧帝∈謚槭＠縺ｾ縺吶\
	 */
	static readonly COMMAND_EDIT_SELECTALL: string;

	/**
	 * 驕ｸ謚槭＠縺溘ヨ繝ｩ繝�け蜀⒤�縺吶∋縺ｦ縺ｮ繧ｯ繝ｪ繝��繧帝∈謚槭＠縺ｾ縺吶\
	 */
	static readonly COMMAND_EDIT_SELECTALLCLIPSINSELECTEDTRACK: string;

	/**
	 * 繧｢繧ｯ繝�ぅ繝悶↑繝代ロ繝ｫ縺ｮ縺吶∋縺ｦ縺ｮ繧ｳ繝ｳ繝�Φ繝�↓蟇ｾ縺励※譎る俣驕ｸ謚槭ｒ菴懈�縺励∪縺吶\
	 */
	static readonly COMMAND_EDIT_SELECTALLTIME: string;

	/**
	 * 繧ｪ繝ｼ繝�ぅ繧ｪ繧ｿ繧､繝励′迺ｰ蠅�浹縺ｮ繧ｯ繝ｪ繝��繧偵☆縺ｹ縺ｦ驕ｸ謚槭＠縺ｾ縺吶\
	 */
	static readonly COMMAND_EDIT_SELECTCLIPSOFMIXTYPE_AMBIENCE: string;

	/**
	 * 繧ｪ繝ｼ繝�ぅ繧ｪ繧ｿ繧､繝励′繝懊う繧ｹ縺ｮ繧ｯ繝ｪ繝��繧偵☆縺ｹ縺ｦ驕ｸ謚槭＠縺ｾ縺吶\
	 */
	static readonly COMMAND_EDIT_SELECTCLIPSOFMIXTYPE_DIALOG: string;

	/**
	 * 繧ｪ繝ｼ繝�ぅ繧ｪ繧ｿ繧､繝励′繝溘Η繝ｼ繧ｸ繝�け縺ｮ繧ｯ繝ｪ繝��繧偵☆縺ｹ縺ｦ驕ｸ謚槭＠縺ｾ縺吶\
	 */
	static readonly COMMAND_EDIT_SELECTCLIPSOFMIXTYPE_MUSIC: string;

	/**
	 * 繧ｪ繝ｼ繝�ぅ繧ｪ繧ｿ繧､繝励′繧ｵ繧ｦ繝ｳ繝峨お繝輔ぉ繧ｯ繝医�繧ｯ繝ｪ繝��繧偵☆縺ｹ縺ｦ驕ｸ謚槭＠縺ｾ縺吶\
	 */
	static readonly COMMAND_EDIT_SELECTCLIPSOFMIXTYPE_SFX: string;

	/**
	 * 驕ｸ謚槭＠縺溘ヨ繝ｩ繝�け蜀⒤�蜀咲函繝倥ャ繝牙ｾ後�繧ｯ繝ｪ繝��繧帝∈謚槭＠縺ｾ縺吶\
	 */
	static readonly COMMAND_EDIT_SELECTCLIPSTOENDOFSELECTEDTRACK: string;

	/**
	 * 蜀咲函繝倥ャ繝峨�蠕後ｍ縺九ｉ繧ｻ繝�す繝ｧ繝ｳ縺ｮ譛\蠕後∪縺ｧ繧ｯ繝ｪ繝��繧帝∈謚槭＠縺ｾ縺吶\
	 */
	static readonly COMMAND_EDIT_SELECTCLIPSTOENDOFSESSION: string;

	/**
	 * 蜀咲函繝倥ャ繝峨�蜑阪°繧峨そ繝�す繝ｧ繝ｳ縺ｮ髢句ｧ九∪縺ｧ繧ｯ繝ｪ繝��繧帝∈謚槭＠縺ｾ縺吶\
	 */
	static readonly COMMAND_EDIT_SELECTCLIPSTOSTARTOFSESSION: string;

	/**
	 * 繧｢繧ｯ繝�ぅ繝悶↑繝代ロ繝ｫ縺ｫ陦ｨ遉ｺ縺輔ｌ縺ｦ縺�ｋ繧ｳ繝ｳ繝�Φ繝�↓蟇ｾ縺励※譎る俣驕ｸ謚槭ｒ菴懈�縺励∪縺吶\
	 */
	static readonly COMMAND_EDIT_SELECTCURRENTVIEWTIME: string;

	/**
	 * 繧ｹ繝壹け繝医Ν縺ｮ驕ｸ謚樒ｯ�峇繧貞渚霆｢縺励∪縺吶\
	 */
	static readonly COMMAND_EDIT_SELECTINVERSE: string;

	/**
	 * 驕ｸ謚槭＠縺溘ヨ繝ｩ繝�け蜀⒤�谺｡縺ｮ繧ｯ繝ｪ繝��繧帝∈謚槭＠縺ｾ縺吶\
	 */
	static readonly COMMAND_EDIT_SELECTNEXTCLIPINSELECTEDTRACK: string;

	/**
	 * 驕ｸ謚槭＠縺溘☆縺ｹ縺ｦ縺ｮ繧ｯ繝ｪ繝��縺ｫ縺ｾ縺溘′繧区凾髢馴∈謚槭ｒ菴懈�縺励∪縺吶\
	 */
	static readonly COMMAND_EDIT_SELECTTIMEAROUNDCLIPS: string;

	/**
	 * 驕ｸ謚樒ｯ�峇縺ｮ繧､繝ｳ繝昴う繝ｳ繝医ｒ蜀咲函繝倥ャ繝峨�菴咲ｽｮ縺ｫ遘ｻ蜍輔＠縺ｾ縺吶\
	 */
	static readonly COMMAND_EDIT_SETINPOINTTOCTI: string;

	/**
	 * 驕ｸ謚樒ｯ�峇縺ｮ繧｢繧ｦ繝医�繧､繝ｳ繝医ｒ蜀咲函繝倥ャ繝峨�菴咲ｽｮ縺ｫ遘ｻ蜍輔＠縺ｾ縺吶\
	 */
	static readonly COMMAND_EDIT_SETOUTPOINTTOCTI: string;

	/**
	 * 繧ｭ繝ｼ繝懊�繝峨す繝ｧ繝ｼ繝医き繝�ヨ繧偵き繧ｹ繧ｿ繝槭う繧ｺ縺励∪縺吶\
	 */
	static readonly COMMAND_EDIT_SHORTCUTS: string;

	/**
	 * 蜷�メ繝｣繝ｳ繝阪Ν繧偵Δ繝弱Λ繝ｫ繝輔ぃ繧､繝ｫ縺ｫ謚ｽ蜃ｺ縺励∪縺吶\
	 */
	static readonly COMMAND_EDIT_SPLITTOMONO: string;

	/**
	 * 縺吶∋縺ｦ縺ｮ繝√Ε繝ｳ繝阪Ν縺ｮ譛牙柑迥ｶ諷九ｒ蛻�ｊ譖ｿ縺医∪縺吶\
	 */
	static readonly COMMAND_EDIT_TOGGLEALLCHANNELS: string;

	/**
	 * 繧ｻ繝ｳ繧ｿ繝ｼ繝√Ε繝ｳ繝阪Ν縺ｮ譛牙柑迥ｶ諷九ｒ蛻�ｊ譖ｿ縺医∪縺吶\
	 */
	static readonly COMMAND_EDIT_TOGGLECENTERCHANNEL: string;

	/**
	 * 繧ｯ繝ｪ繝��繧ｹ繝医Ξ繝�メ繝上Φ繝峨Ν縺ｮ陦ｨ遉ｺ繧貞�繧頑崛縺医∪縺吶\
	 */
	static readonly COMMAND_EDIT_TOGGLECLIPSTRETCHING: string;

	/**
	 * 繝輔Ο繝ｳ繝医Ξ繝輔ヨ繝√Ε繝ｳ繝阪Ν縺ｮ譛牙柑迥ｶ諷九ｒ蛻�ｊ譖ｿ縺医∪縺吶\
	 */
	static readonly COMMAND_EDIT_TOGGLEFRONTLEFTCHANNEL: string;

	/**
	 * 繝輔Ο繝ｳ繝医Λ繧､繝医メ繝｣繝ｳ繝阪Ν縺ｮ譛牙柑迥ｶ諷九ｒ蛻�ｊ譖ｿ縺医∪縺吶\
	 */
	static readonly COMMAND_EDIT_TOGGLEFRONTRIGHTCHANNEL: string;

	/**
	 * 蟾ｦ繧ｵ繝ｩ繧ｦ繝ｳ繝峨メ繝｣繝ｳ繝阪Ν縺ｮ譛牙柑迥ｶ諷九ｒ蛻�ｊ譖ｿ縺医∪縺吶\
	 */
	static readonly COMMAND_EDIT_TOGGLELEFTSURROUNDCHANNEL: string;

	/**
	 * 菴朱浹蝓溘メ繝｣繝ｳ繝阪Ν縺ｮ譛牙柑迥ｶ諷九ｒ蛻�ｊ譖ｿ縺医∪縺吶\
	 */
	static readonly COMMAND_EDIT_TOGGLELFECHANNEL: string;

	/**
	 * 蜀咲函譎ゅ�閾ｪ蜍輔せ繧ｯ繝ｭ繝ｼ繝ｫ縺ｮ繧ｪ繝ｳ縺ｨ繧ｪ繝輔ｒ蛻�ｊ譖ｿ縺医∪縺吶\
	 */
	static readonly COMMAND_EDIT_TOGGLEPLAYBACKAUTOSCROLL: string;

	/**
	 * 蜿ｳ繧ｵ繝ｩ繧ｦ繝ｳ繝峨メ繝｣繝ｳ繝阪Ν縺ｮ譛牙柑迥ｶ諷九ｒ蛻�ｊ譖ｿ縺医∪縺吶\
	 */
	static readonly COMMAND_EDIT_TOGGLERIGHTSURROUNDCHANNEL: string;

	/**
	 * 縺吶∋縺ｦ縺ｮ繧ｿ繧､繝 繝ｩ繧､繝ｳ繧ｹ繝翫ャ繝励�繧ｪ繝ｳ | 繧ｪ繝輔ｒ蛻�ｊ譖ｿ縺医∪縺吶\
	 */
	static readonly COMMAND_EDIT_TOGGLESNAPPING: string;

	/**
	 * 繧ｯ繝ｪ繝��縺ｸ縺ｮ繧ｹ繝翫ャ繝励ｒ蛻�ｊ譖ｿ縺医∪縺吶\
	 */
	static readonly COMMAND_EDIT_TOGGLESNAPTOCLIPS: string;

	/**
	 * 繝輔Ξ繝ｼ繝 繧ｿ繧､繝 蠖｢蠑上ｒ陦ｨ遉ｺ縺励※縺�ｋ縺ｨ縺阪�縲√ヵ繝ｬ繝ｼ繝 縺ｸ縺ｮ繧ｹ繝翫ャ繝励ｒ蛻�ｊ譖ｿ縺医∪縺吶\
	 */
	static readonly COMMAND_EDIT_TOGGLESNAPTOFRAMES: string;

	/**
	 * 繝ｫ繝ｼ繝励�蠅�阜縺ｸ縺ｮ繧ｹ繝翫ャ繝励ｒ蛻�ｊ譖ｿ縺医∪縺吶\
	 */
	static readonly COMMAND_EDIT_TOGGLESNAPTOLOOPS: string;

	/**
	 * 繝槭�繧ｫ繝ｼ縺ｸ縺ｮ繧ｹ繝翫ャ繝励ｒ蛻�ｊ譖ｿ縺医∪縺吶\
	 */
	static readonly COMMAND_EDIT_TOGGLESNAPTOMARKERS: string;

	/**
	 * 繝ｫ繝ｼ繝ｩ繝ｼ縺ｮ螟ｧ縺阪↑逶ｮ逶帙ｊ縺ｸ縺ｮ繧ｹ繝翫ャ繝励ｒ蛻�ｊ譖ｿ縺医∪縺吶\
	 */
	static readonly COMMAND_EDIT_TOGGLESNAPTORULERCOARSE: string;

	/**
	 * 繝ｫ繝ｼ繝ｩ繝ｼ縺ｮ縺吶∋縺ｦ縺ｮ逶ｮ逶帙ｊ縺ｸ縺ｮ繧ｹ繝翫ャ繝励ｒ蛻�ｊ譖ｿ縺医∪縺吶\
	 */
	static readonly COMMAND_EDIT_TOGGLESNAPTORULERFINE: string;

	/**
	 * 繧ｼ繝ｭ繧ｯ繝ｭ繧ｹ縺ｸ縺ｮ繧ｹ繝翫ャ繝励ｒ蛻�ｊ譖ｿ縺医∪縺吶\
	 */
	static readonly COMMAND_EDIT_TOGGLESNAPTOZEROCROSSINGS: string;

	/**
	 * 譛\蠕後�謫堺ｽ懊ｒ蜿悶ｊ豸医＠縺ｾ縺吶\
	 */
	static readonly COMMAND_EDIT_UNDO: string;

	/**
	 * 驕ｩ蠢懊ヮ繧､繧ｺ繝ｪ繝\繧ｯ繧ｷ繝ｧ繝ｳ 繧貞㍎逅�＠縺ｾ縺吶\
	 */
	static readonly COMMAND_EFFECTS_ADAPTIVENOISEREDUCTION: string;

	/**
	 * 豕｢蠖｢縺ｮ繝√Ε繝ｳ繝阪Ν繧貞｢怜ｹ⒤＠縺ｾ縺吶\
	 */
	static readonly COMMAND_EFFECTS_AMPLIFY: string;

	/**
	 * 豕｢蠖｢縺ｫ Analog Delay 繧定ｿｽ蜉 縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_ANALOGDELAY: string;

	/**
	 * 豕｢蠖｢縺九ｉ繧ｯ繝ｪ繝�け繝弱う繧ｺ繧貞炎髯､縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_AUTOCLICKREMOVER: string;

	/**
	 * 繧ｹ繝�Ξ繧ｪ豕｢蠖｢縺ｮ繝輔ぉ繝ｼ繧ｺ繧剃ｿｮ豁｣縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_AUTOPHASECORRECTION: string;

	/**
	 * 驕ｸ謚槭＠縺滓ｳ｢蠖｢縺九ｉ繧ｵ繧ｦ繝ｳ繝峨Δ繝�Ν繧貞ｭｦ鄙偵＠縺ｾ縺吶\
	 */
	static readonly COMMAND_EFFECTS_CAPTUREDYNAMICNOISEREMOVALPROFILE: string;

	/**
	 * 豕｢蠖｢縺九ｉ繝弱う繧ｺ繝励Μ繝ｳ繝医ｒ繧ｭ繝｣繝励メ繝｣縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_CAPTURENOISEREDUCTIONPROFILE: string;

	/**
	 * 繧ｻ繝ｳ繧ｿ繝ｼ繝√Ε繝ｳ繝阪Ν繧呈歓蜃ｺ縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_CENTERCHANNELEXTRACT: string;

	/**
	 * 繝√Ε繝ｳ繝阪Ν繧偵Α繧ｭ繧ｷ繝ｳ繧ｰ縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_CHANNELMIXER: string;

	/**
	 * 豕｢蠖｢縺ｫ Chorus 繧定ｿｽ蜉 縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_CHORUS: string;

	/**
	 * 豕｢蠖｢縺ｫ Chorus|Flanger 繧定ｿｽ蜉 縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_CHORUSFLANGER: string;

	/**
	 * 繧ｨ繝輔ぉ繧ｯ繝医Λ繝�け繝代ロ繝ｫ縺ｮ繧ｳ繝ｳ繝�Φ繝�ｒ豸亥悉縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_CLEAREFFECTSRACK: string;

	/**
	 * Click|Pop Eliminator 繧ｨ繝輔ぉ繧ｯ繝医ｒ驕ｩ逕ｨ縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_CLICKPOPELIMINATOR: string;

	/**
	 * 豕｢蠖｢縺ｮ繧ｯ繝ｪ繝�け繝弱う繧ｺ | 繝昴ャ繝励ヮ繧､繧ｺ縺ｮ蝠城｡後ｒ蛻�梵縺翫ｈ縺ｳ菫ｮ豁｣縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_CLICKPOPELIMINATORANALYSIS: string;

	/**
	 * 豕｢蠖｢縺ｮ繧ｯ繝ｪ繝��縺励◆繧ｵ繝ｳ繝励Ν繧貞�譫舌♀繧医�菫ｮ豁｣縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_CLIPRESTORATIONANALYSIS: string;

	/**
	 * 豕｢蠖｢縺ｫ Convolution Reverb 繧定ｿｽ蜉 縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_CONVOLUTIONREVERB: string;

	/**
	 * 豕｢蠖｢縺ｫ DeEsser 繧定ｿｽ蜉 縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_DEESSER: string;

	/**
	 * 豕｢蠖｢縺ｫ DeHummer 繧定ｿｽ蜉 縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_DEHUMMER: string;

	/**
	 * 豕｢蠖｢縺ｫ Delay 繧定ｿｽ蜉 縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_DELAY: string;

	/**
	 * 繧ｨ繝輔ぉ繧ｯ繝医Λ繝�け縺九ｉ縺吶∋縺ｦ縺ｮ繧ｨ繝輔ぉ繧ｯ繝医ｒ蜑企勁縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_DELETEALLEFFECTS: string;

	/**
	 * 繧ｨ繝輔ぉ繧ｯ繝医Λ繝�け縺九ｉ驕ｸ謚槭＠縺溘お繝輔ぉ繧ｯ繝医ｒ蜑企勁縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_DELETESELECTEDEFFECTS: string;

	/**
	 * 豕｢蠖｢繧貞�譫舌＠縺ｦ辟｡髻ｳ繧貞炎髯､縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_DELETESILENCEANALYSIS: string;

	/**
	 * 繧ｪ繝ｼ繝�ぅ繧ｪ菫｡蜿ｷ縺九ｉ繝弱う繧ｺ繧帝勁蜴ｻ縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_DENOISE: string;

	/**
	 * 繧ｪ繝ｼ繝�ぅ繧ｪ菫｡蜿ｷ縺九ｉ繝ｪ繝舌�繝悶ｒ髯､蜴ｻ縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_DEREVERB: string;

	/**
	 * 豕｢蠖｢縺ｫ Distortion 繧定ｿｽ蜉 縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_DISTORTION: string;

	/**
	 * 豕｢蠖｢縺ｫ Doppler 繧ｨ繝輔ぉ繧ｯ繝医ｒ驕ｩ逕ｨ縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_DOPPLER: string;

	/**
	 * 豕｢蠖｢縺ｮ繝\繧､繝翫Α繝�け繧ｹ繧呈桃菴懊＠縺ｾ縺吶\
	 */
	static readonly COMMAND_EFFECTS_DYNAMICS: string;

	/**
	 * 豕｢蠖｢縺ｫ繧ｨ繧ｳ繝ｼ繧定ｿｽ蜉 縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_ECHO: string;

	/**
	 * 繧ｨ繝輔ぉ繧ｯ繝医Λ繝�け繝代ロ繝ｫ縺ｧ繧ｯ繝ｪ繝��繧ｨ繝輔ぉ繧ｯ繝医�邱ｨ髮�ｒ譛牙柑縺ｫ縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_EDITCLIPEFFECTS: string;

	/**
	 * 繧ｨ繝輔ぉ繧ｯ繝医Λ繝�け縺ｧ驕ｸ謚槭＠縺溘お繝輔ぉ繧ｯ繝医ｒ邱ｨ髮�＠縺ｾ縺吶\
	 */
	static readonly COMMAND_EFFECTS_EDITSELECTEDEFFECT: string;

	/**
	 * 繧ｨ繝輔ぉ繧ｯ繝医Λ繝�け繝代ロ繝ｫ縺ｧ繝医Λ繝�け繧ｨ繝輔ぉ繧ｯ繝医�邱ｨ髮�ｒ譛牙柑縺ｫ縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_EDITTRACKEFFECTS: string;

	/**
	 * 
	 */
	static readonly COMMAND_EFFECTS_EFFECTSRACKPANELTOFRONTANDACTIVE: string;

	/**
	 * 謖ｯ蟷⒨紫繧ｹ繧ｱ繝ｼ繝ｫ繧剃ｽｿ逕ｨ縺励※繝輔ぉ繝ｼ繝峨お繝ｳ繝吶Ο繝ｼ繝励ｒ蜃ｦ逅�＠縺ｾ縺吶\
	 */
	static readonly COMMAND_EFFECTS_FADEENVELOPE: string;

	/**
	 * 豕｢蠖｢縺ｫ FFT 繝輔ぅ繝ｫ繧ｿ繝ｼ繧帝←逕ｨ縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_FFTFILTER: string;

	/**
	 * 豕｢蠖｢縺ｫ Flanger 繧定ｿｽ蜉 縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_FLANGER: string;

	/**
	 * 豕｢蠖｢縺ｫ繝ｪ繝舌�繝悶ｒ霑ｽ蜉 縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_FULLREVERB: string;

	/**
	 * 繝�す繝吶Ν繧ｹ繧ｱ繝ｼ繝ｫ繧剃ｽｿ逕ｨ縺励※繧ｲ繧､繝ｳ繧ｨ繝ｳ繝吶Ο繝ｼ繝励ｒ蜃ｦ逅�＠縺ｾ縺吶\
	 */
	static readonly COMMAND_EFFECTS_GAINENVELOPE: string;

	/**
	 * 謖㍾ｮ壹＠縺溘ヮ繧､繧ｺ繧呈眠隕上ヵ繧｡繧､繝ｫ縺ｨ縺励※菴懈�縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_GENERATENOISE: string;

	/**
	 * 謖㍾ｮ壹＠縺溘せ繝斐�繝√ｒ譁ｰ隕上ヵ繧｡繧､繝ｫ縺ｨ縺励※菴懈�縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_GENERATESPEECH: string;

	/**
	 * 謖㍾ｮ壹＠縺溘ヨ繝ｼ繝ｳ繧呈眠隕上ヵ繧｡繧､繝ｫ縺ｨ縺励※菴懈�縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_GENERATETONES: string;

	/**
	 * 豕｢蠖｢縺ｫ Graphic EQ 繧帝←逕ｨ縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_GRAPHICEQ10BANDS: string;

	/**
	 * 豕｢蠖｢縺ｫ Graphic EQ 繧帝←逕ｨ縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_GRAPHICEQ20BANDS: string;

	/**
	 * 豕｢蠖｢縺ｫ Graphic EQ 繧帝←逕ｨ縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_GRAPHICEQ30BANDS: string;

	/**
	 * Graphic Phase Shifter 繧ｨ繝輔ぉ繧ｯ繝医ｒ驕ｩ逕ｨ縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_GRAPHICPHASESHIFTER: string;

	/**
	 * 豕｢蠖｢縺ｫ GuitarSuite 繧定ｿｽ蜉 縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_GUITARSUITE: string;

	/**
	 * 豕｢蠖｢縺ｮ繝上�繝峨Μ繝溘ャ繝医ｒ陦後＞縺ｾ縺吶\
	 */
	static readonly COMMAND_EFFECTS_HARDLIMIT: string;

	/**
	 * 繝偵せ繝弱う繧ｺ縺ｮ蜑頑ｸ帛㍎逅�ｒ縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_HISSREDUCTIONPROCESS: string;

	/**
	 * 荳榊插遲峨↑豕｢蠖｢繧剃ｿｮ豁｣縺励∪縺� (髻ｳ螢ｰ縺ｫ譛\驕ｩ)縲
	 */
	static readonly COMMAND_EFFECTS_INTRACLIP: string;

	/**
	 * 迴ｾ蝨ｨ驕ｸ謚槭＆繧後※縺�ｋ繧ｪ繝ｼ繝�ぅ繧ｪ繧剃ｽ咲嶌蜿崎ｻ｢縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_INVERT: string;

	/**
	 * 豕｢蠖｢繧貞�譫舌＠縺ｦ髱樒┌髻ｳ驛ｨ繧偵�繝ｼ繧ｯ縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_MARKAUDIOANALYSIS: string;

	/**
	 * 豕｢蠖｢縺ｫ Mastering 繧定ｿｽ蜉 縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_MASTERING: string;

	/**
	 * 繝ｩ繧ｦ繝峨ロ繧ｹ繧剃ｸ\閾ｴ繝代ロ繝ｫ繧帝幕縺阪∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_MATCHVOLUME: string;

	/**
	 * 豕｢蠖｢縺ｫ Multiband Compressor 繧定ｿｽ蜉 縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_MULTIBANDCOMPRESSOR: string;

	/**
	 * 繝弱う繧ｺ繝ｪ繝\繧ｯ繧ｷ繝ｧ繝ｳ繧貞㍎逅�＠縺ｾ縺吶\
	 */
	static readonly COMMAND_EFFECTS_NOISEREDUCTIONPROCESS: string;

	/**
	 * 豕｢蠖｢繧偵ヮ繝ｼ繝槭Λ繧､繧ｺ縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_NORMALIZE: string;

	/**
	 * 豕｢蠖｢縺ｫ Notch Filter 繧帝←逕ｨ縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_NOTCHFILTER: string;

	/**
	 * 豕｢蠖｢縺ｮ繝\繧､繝翫Α繝�け繧ｹ繧呈桃菴懊＠縺ｾ縺吶\
	 */
	static readonly COMMAND_EFFECTS_PARAMETRICDYNAMICS: string;

	/**
	 * 豕｢蠖｢縺ｫ Parametric EQ 繧帝←逕ｨ縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_PARAMETRICEQ: string;

	/**
	 * 豕｢蠖｢縺ｫ Phaser 繧定ｿｽ蜉 縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_PHASER: string;

	/**
	 * 譎る俣逧�ｵ碁℃縺ｫ蠢懊§縺ｦ繝斐ャ繝√お繝ｳ繝吶Ο繝ｼ繝励ｒ蜃ｦ逅�＠縺ｾ縺吶\
	 */
	static readonly COMMAND_EFFECTS_PITCHBENDER: string;

	/**
	 * 繝斐ャ繝√ｒ閾ｪ蜍慕噪縺ｫ菫ｮ豁｣縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_PITCHCORRECT: string;

	/**
	 * 繧ｨ繝ｳ繝吶Ο繝ｼ繝励ｒ菴ｿ逕ｨ縺励\√ヴ繝�メ繧呈凾髢薙↓豐ｿ縺｣縺ｦ謇句虚縺ｧ菫ｮ豁｣縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_PITCHCORRECTMANUAL: string;

	/**
	 * 繝斐ャ繝√ｒ繧ｷ繝輔ヨ縺ｾ縺溘�繧ｹ繝医Ξ繝�メ縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_PITCHSHIFTER: string;

	/**
	 * 繧ｪ繝ｼ繝�ぅ繧ｪ繝励Λ繧ｰ繧､繝ｳ繝槭ロ繝ｼ繧ｸ繝｣繝ｼ繝\繧､繧｢繝ｭ繧ｰ繧帝幕縺阪∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_PLUGINMANAGER: string;

	/**
	 * 繧ｨ繝輔ぉ繧ｯ繝医Λ繝�け蜈ｨ菴薙�繝代Ρ繝ｼ迥ｶ諷九ｒ蛻�ｊ譖ｿ縺医∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_POWEREFFECTSRACK: string;

	/**
	 * 繧ｨ繝輔ぉ繧ｯ繝医Λ繝�け蜀⒤�驕ｸ謚槭＠縺溘お繝輔ぉ繧ｯ繝医�繝代Ρ繝ｼ迥ｶ諷九ｒ蛻�ｊ譖ｿ縺医∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_POWERSELECTEDEFFECTS: string;

	/**
	 * Loudness Radar Meter 繧呈ｳ｢蠖｢縺ｫ霑ｽ蜉 縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_RADARMETER: string;

	/**
	 * 繧ｨ繝輔ぉ繧ｯ繝医Λ繝�け縺ｮ縺吶∋縺ｦ縺ｮ繧ｨ繝輔ぉ繧ｯ繝医ｒ迴ｾ蝨ｨ縺ｮ繧ｪ繝ｼ繝�ぅ繧ｪ繝輔ぃ繧､繝ｫ縺ｫ繝ｬ繝ｳ繝\繝ｪ繝ｳ繧ｰ縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_RENDEREFFECTSRACK: string;

	/**
	 * 驕ｸ謚槭＠縺滉ｸ崎ｦ√↑繧ｵ繧ｦ繝ｳ繝峨ｒ蜻ｨ蝗ｲ縺ｮ繝槭ユ繝ｪ繧｢繝ｫ縺ｧ鄂ｮ縺肴鋤縺医∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_REPAIR: string;

	/**
	 * 豕｢蠖｢縺ｫ繝ｪ繝舌�繝悶ｒ霑ｽ蜉 縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_REVERB: string;

	/**
	 * 迴ｾ蝨ｨ驕ｸ謚槭＆繧後※縺�ｋ繧ｪ繝ｼ繝�ぅ繧ｪ繧貞燕蠕碁\�↓縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_REVERSE: string;

	/**
	 * 豕｢蠖｢縺ｫ Scientific Filter 繧帝←逕ｨ縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_SCIENTIFICFILTER: string;

	/**
	 * 迴ｾ蝨ｨ驕ｸ謚槭＆繧後※縺�ｋ繧ｪ繝ｼ繝�ぅ繧ｪ繧堤┌髻ｳ縺ｫ縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_SILENCE: string;

	/**
	 * 豕｢蠖｢縺ｫ Single-band Compressor 繧定ｿｽ蜉 縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_SINGLEBANDCOMPRESSOR: string;

	/**
	 * 謖㍾ｮ壹＠縺溘し繧ｦ繝ｳ繝峨ｒ蜑企勁縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_SOUNDREMOVALPROCESS: string;

	/**
	 * 繧ｹ繝�Ξ繧ｪ繧､繝｡繝ｼ繧ｸ繧帝�鄂ｮ縺励※諡｡蠑ｵ縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_STEREOEXPANDER: string;

	/**
	 * 豕｢蠖｢繧偵せ繝医Ξ繝�メ縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_STRETCH: string;

	/**
	 * 豕｢蠖｢縺ｫ繝ｪ繝舌�繝悶ｒ霑ｽ蜉 縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_STUDIOREVERB: string;

	/**
	 * 豕｢蠖｢縺ｫ Surround Reverb 繧定ｿｽ蜉 縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_SURROUNDREVERB: string;

	/**
	 * 豕｢蠖｢縺ｫ Tube-modeled Compressor 繧定ｿｽ蜉 縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_TUBEMODELEDCOMPRESSOR: string;

	/**
	 * 豕｢蠖｢縺ｫ Vocal Enhancer 繧定ｿｽ蜉 縺励∪縺吶\
	 */
	static readonly COMMAND_EFFECTS_VOCALENHANCER: string;

	/**
	 * 
	 */
	static readonly COMMAND_FAVORITES_5_1__________: string;

	/**
	 * 
	 */
	static readonly COMMAND_FAVORITES_60_HZ____________________________: string;

	/**
	 * 
	 */
	static readonly COMMAND_FAVORITES_DC_________________________: string;

	/**
	 * 繝�Φ繝励Ξ繝ｼ繝医�蜑企勁繧定ｨｱ蜿ｯ縺励∪縺吶\
	 */
	static readonly COMMAND_FAVORITES_DELETEFAVORITE: string;

	/**
	 * 繝�Φ繝励Ξ繝ｼ繝医ヱ繝阪Ν繧帝幕縺阪\√ユ繝ｳ繝励Ξ繝ｼ繝医ｒ邱ｨ髮�＠縺ｾ縺吶\
	 */
	static readonly COMMAND_FAVORITES_EDITFAVORITES: string;

	/**
	 * 繝�Φ繝励Ξ繝ｼ繝医∈繧ｨ繝�ぅ繧ｿ繝ｼ謫堺ｽ懊�險倬鹸繧帝幕蟋九＠縺ｾ縺吶\
	 */
	static readonly COMMAND_FAVORITES_STARTRECORDINGFAVORITE: string;

	/**
	 * 繧ｨ繝�ぅ繧ｿ繝ｼ謫堺ｽ懊�險倬鹸繧貞●豁｢縺励\∵眠縺励＞繝�Φ繝励Ξ繝ｼ繝医ｒ菴懈�縺励∪縺吶\
	 */
	static readonly COMMAND_FAVORITES_STOPRECORDINGFAVORITE: string;

	/**
	 * 
	 */
	static readonly COMMAND_FAVORITES__0_1_DB______________________: string;

	/**
	 * 
	 */
	static readonly COMMAND_FAVORITES__0_1_DB_________________________: string;

	/**
	 * 
	 */
	static readonly COMMAND_FAVORITES__3_DB______________________: string;

	/**
	 * 
	 */
	static readonly COMMAND_FAVORITES_____________: string;

	/**
	 * 
	 */
	static readonly COMMAND_FAVORITES_____________: string;

	/**
	 * 
	 */
	static readonly COMMAND_FAVORITES________________: string;

	/**
	 * 
	 */
	static readonly COMMAND_FAVORITES___________________: string;

	/**
	 * 
	 */
	static readonly COMMAND_FAVORITES___________________: string;

	/**
	 * 
	 */
	static readonly COMMAND_FAVORITES___________________: string;

	/**
	 * 
	 */
	static readonly COMMAND_FAVORITES______________________: string;

	/**
	 * 
	 */
	static readonly COMMAND_FAVORITES______________________: string;

	/**
	 * 
	 */
	static readonly COMMAND_FAVORITES______________________: string;

	/**
	 * 
	 */
	static readonly COMMAND_FAVORITES______________________: string;

	/**
	 * 
	 */
	static readonly COMMAND_FAVORITES______________________: string;

	/**
	 * 
	 */
	static readonly COMMAND_FAVORITES______________________: string;

	/**
	 * 
	 */
	static readonly COMMAND_FAVORITES___________________________________________: string;

	/**
	 * 驕ｸ謚槭＠縺� ExtendScript 繝輔ぃ繧､繝ｫ繧貞ｮ溯｡後＠縺ｾ縺吶\
	 */
	static readonly COMMAND_FILE_BROWSEANDRUNSCRIPT: string;

	/**
	 * 繝ｪ繧ｹ繝医＆繧後※縺�ｋ譛\霑台ｽｿ逕ｨ縺励◆繝輔ぃ繧､繝ｫ繧呈ｶ亥悉縺励∪縺吶\
	 */
	static readonly COMMAND_FILE_CLEARRECENT: string;

	/**
	 * 迴ｾ蝨ｨ縺ｮ繝輔ぃ繧､繝ｫ繧帝哩縺倥∪縺吶\
	 */
	static readonly COMMAND_FILE_CLOSE: string;

	/**
	 * 縺吶∋縺ｦ縺ｮ繝輔ぃ繧､繝ｫ繧帝哩縺倥∪縺吶\
	 */
	static readonly COMMAND_FILE_CLOSEALL: string;

	/**
	 * 迴ｾ蝨ｨ縺ｮ繧ｻ繝�す繝ｧ繝ｳ縺ｨ蜿らⅨ縺輔ｌ縺ｦ縺�ｋ繝｡繝�ぅ繧｢繧帝哩縺倥∪縺吶\
	 */
	static readonly COMMAND_FILE_CLOSESESSIONANDITSMEDIA: string;

	/**
	 * 髢九＞縺ｦ縺�ｋ繧ｻ繝�す繝ｧ繝ｳ縺ｧ蜿らⅨ縺輔ｌ縺ｦ縺�↑縺�ヵ繧｡繧､繝ｫ繧帝哩縺倥∪縺吶\
	 */
	static readonly COMMAND_FILE_CLOSEUNUSEDMEDIA: string;

	/**
	 * 驕ｸ謚槭＠縺溘ヵ繧｡繧､繝ｫ縺ｫ繧｢繝励Μ繧ｱ繝ｼ繧ｷ繝ｧ繝ｳ險ｭ螳壹ｒ譖ｸ縺榊�縺励∪縺吶\
	 */
	static readonly COMMAND_FILE_EXPORTAPPLICATIONSETTINGS: string;

	/**
	 * 縺吶∋縺ｦ縺ｮ遽�峇繝槭�繧ｫ繝ｼ縺ｮ繧ｪ繝ｼ繝�ぅ繧ｪ繧貞\句挨縺ｮ繝輔ぃ繧､繝ｫ縺ｫ譖ｸ縺榊�縺励∪縺吶\
	 */
	static readonly COMMAND_FILE_EXPORT_ALLMARKERRANGES: string;

	/**
	 * 繧ｪ繝ｼ繝�ぅ繧ｪ繝輔ぃ繧､繝ｫ繧堤ｩｺ縺ｮ繧ｳ繝ｳ繝代け繝医ョ繧｣繧ｹ繧ｯ縺ｫ譖ｸ縺崎ｾｼ縺ｿ縺ｾ縺吶\
	 */
	static readonly COMMAND_FILE_EXPORT_BURNAUDIOTOCD: string;

	/**
	 * Adobe Premiere Pro 縺ｧ髢九￥縺薙→縺ｮ縺ｧ縺阪ｋ譁ｰ隕� XML 繝輔ぃ繧､繝ｫ縺ｫ迴ｾ蝨ｨ縺ｮ繧ｻ繝�す繝ｧ繝ｳ繧呈嶌縺榊�縺励∪縺吶\
	 */
	static readonly COMMAND_FILE_EXPORT_EXPORTTOADOBEPREMIEREPRO: string;

	/**
	 * 繝医Λ繝�け驕ｸ謚槭�蜃ｺ蜉帙ｒ繝溘ャ繧ｯ繧ｹ繝\繧ｦ繝ｳ縺励\、dobe Media Encoder 縺ｧ譖ｸ縺榊�縺励∪縺吶\
	 */
	static readonly COMMAND_FILE_EXPORT_EXPORTWITHADOBEMEDIAENCODER: string;

	/**
	 * 迴ｾ蝨ｨ縺ｮ繧ｻ繝�す繝ｧ繝ｳ繧� FCP XML Interchange 蠖｢蠑上↓譖ｸ縺榊�縺励∪縺吶\
	 */
	static readonly COMMAND_FILE_EXPORT_FCXML: string;

	/**
	 * 迴ｾ蝨ｨ縺ｮ繝輔ぃ繧､繝ｫ繧呈眠隕上ヵ繧｡繧､繝ｫ縺ｫ譖ｸ縺榊�縺励∪縺吶\
	 */
	static readonly COMMAND_FILE_EXPORT_FILE: string;

	/**
	 * 驕ｸ謚槭＠縺溘�繝ｼ繧ｫ繝ｼ繧偵ヵ繧｡繧､繝ｫ縺ｫ譖ｸ縺榊�縺励∪縺吶\
	 */
	static readonly COMMAND_FILE_EXPORT_MARKERS: string;

	/**
	 * 繝槭せ繧ｿ繝ｼ繝医Λ繝�け縺ｮ蜃ｺ蜉帛Ⅹ菴薙ｒ譁ｰ隕上ヵ繧｡繧､繝ｫ縺ｫ繝溘ャ繧ｯ繧ｹ繝\繧ｦ繝ｳ縺励∪縺吶\
	 */
	static readonly COMMAND_FILE_EXPORT_MULTITRACKMIXDOWNALL: string;

	/**
	 * 驕ｸ謚槭＆繧後◆繧ｯ繝ｪ繝��縺ｮ繝槭せ繧ｿ繝ｼ繝医Λ繝�け縺ｮ蜃ｺ蜉帙ｒ縲∵眠縺励＞繝輔ぃ繧､繝ｫ縺ｫ繝溘ャ繧ｯ繧ｹ繝\繧ｦ繝ｳ縺励∪縺吶\
	 */
	static readonly COMMAND_FILE_EXPORT_MULTITRACKMIXDOWNSELECTEDCLIPS: string;

	/**
	 * 驕ｸ謚槭＠縺溽ｯ�峇繝槭�繧ｫ繝ｼ縺ｫ蟇ｾ蠢懊☆繧矩 伜沺蜀⒤�繝槭せ繧ｿ繝ｼ繝医Λ繝�け縺ｮ蜃ｺ蜉帙ｒ 1 縺､縺ｾ縺溘�隍㍽焚縺ｮ繝輔ぃ繧､繝ｫ縺ｫ繝溘ャ繧ｯ繧ｹ繝\繧ｦ繝ｳ縺励∪縺吶\
	 */
	static readonly COMMAND_FILE_EXPORT_MULTITRACKMIXDOWNSELECTEDMARKERRANGES: string;

	/**
	 * 繝槭せ繧ｿ繝ｼ繝医Λ繝�け縺ｮ譎る俣驕ｸ謚樒ｯ�峇縺ｮ蜃ｺ蜉帙ｒ譁ｰ隕上ヵ繧｡繧､繝ｫ縺ｫ繝溘ャ繧ｯ繧ｹ繝\繧ｦ繝ｳ縺励∪縺吶\
	 */
	static readonly COMMAND_FILE_EXPORT_MULTITRACKMIXDOWNSELECTION: string;

	/**
	 * 迴ｾ蝨ｨ縺ｮ繧ｻ繝�す繝ｧ繝ｳ繧呈眠隕� OMF 繝輔ぃ繧､繝ｫ縺ｫ譖ｸ縺榊�縺励∪縺吶\
	 */
	static readonly COMMAND_FILE_EXPORT_OMF: string;

	/**
	 * 迴ｾ蝨ｨ縺ｮ繧ｻ繝�す繝ｧ繝ｳ繧呈眠隕上ヵ繧｡繧､繝ｫ縺ｫ譖ｸ縺榊�縺励∪縺吶\
	 */
	static readonly COMMAND_FILE_EXPORT_SESSION: string;

	/**
	 * 蠕後〒繧ｻ繝�す繝ｧ繝ｳ繧剃ｽ懈�縺吶ｋ縺溘ａ縺ｮ繝�Φ繝励Ξ繝ｼ繝医→縺励※迴ｾ蝨ｨ縺ｮ繧ｻ繝�す繝ｧ繝ｳ繧呈嶌縺榊�縺励∪縺吶\
	 */
	static readonly COMMAND_FILE_EXPORT_SESSIONASTEMPLATE: string;

	/**
	 * 繧ｪ繝ｼ繝�ぅ繧ｪ CD 繝医Λ繝�け縺九ｉ繧ｪ繝ｼ繝�ぅ繧ｪ繧呈歓蜃ｺ縺励∪縺吶\
	 */
	static readonly COMMAND_FILE_EXTRACTAUDIOFROMCD: string;

	/**
	 * 驕ｸ謚槭＠縺溘ヵ繧｡繧､繝ｫ縺九ｉ繧｢繝励Μ繧ｱ繝ｼ繧ｷ繝ｧ繝ｳ險ｭ螳壹ｒ隱ｭ縺ｿ霎ｼ縺ｿ縺ｾ縺吶\
	 */
	static readonly COMMAND_FILE_IMPORTAPPLICATIONSETTINGS: string;

	/**
	 * 驕ｸ謚槭＠縺溘ヵ繧｡繧､繝ｫ繧定ｪｭ縺ｿ霎ｼ縺ｿ縺ｾ縺吶\
	 */
	static readonly COMMAND_FILE_IMPORTFILE: string;

	/**
	 * 繝ｦ繝ｼ繧ｶ繝ｼ縺梧欠螳壹＠縺溘ョ繝ｼ繧ｿ繧ｿ繧､繝励〒縲�∈謚槭＠縺溘ヵ繧｡繧､繝ｫ繧定ｪｭ縺ｿ霎ｼ縺ｿ縺ｾ縺吶\
	 */
	static readonly COMMAND_FILE_IMPORTRAWDATA: string;

	/**
	 * 驕ｸ謚槭＠縺溘ヵ繧｡繧､繝ｫ縺九ｉ繝槭�繧ｫ繝ｼ繧定ｪｭ縺ｿ霎ｼ縺ｿ縺ｾ縺吶\
	 */
	static readonly COMMAND_FILE_IMPORT_MARKERS: string;

	/**
	 * 遨ｺ縺ｮ繧ｪ繝ｼ繝�ぅ繧ｪ繝輔ぃ繧､繝ｫ繧剃ｽ懈�縺吶ｋ縲
	 */
	static readonly COMMAND_FILE_NEWAUDIOFILE: string;

	/**
	 * 遨ｺ縺ｮ CD 繝ｬ繧､繧｢繧ｦ繝医ｒ菴懈�縺励∪縺吶\
	 */
	static readonly COMMAND_FILE_NEWCDLAYOUT: string;

	/**
	 * 遨ｺ縺ｮ繧ｻ繝�す繝ｧ繝ｳ繧剃ｽ懈�縺励∪縺吶\
	 */
	static readonly COMMAND_FILE_NEWSESSION: string;

	/**
	 * 譌｢蟄倥�繝輔ぃ繧､繝ｫ繧帝幕縺上\
	 */
	static readonly COMMAND_FILE_OPEN: string;

	/**
	 * 譌｢蟄倥�繝輔ぃ繧､繝ｫ繧帝幕縺阪\∫樟蝨ｨ髢九＞縺ｦ縺�ｋ繝輔ぃ繧､繝ｫ縺ｮ蠕後ｍ縺ｫ霑ｽ蜉 縺励∪縺吶\
	 */
	static readonly COMMAND_FILE_OPENAPPENDTOCURRENT: string;

	/**
	 * 譌｢蟄倥�繝輔ぃ繧､繝ｫ繧帝幕縺阪\∵眠隕上ヵ繧｡繧､繝ｫ縺ｮ蠕後ｍ縺ｫ霑ｽ蜉 縺励∪縺吶\
	 */
	static readonly COMMAND_FILE_OPENAPPENDTONEW: string;

	/**
	 * 譛\蠕後↓菴ｿ逕ｨ縺励◆繝輔ぃ繧､繝ｫ繧帝幕縺阪∪縺吶\
	 */
	static readonly COMMAND_FILE_OPENMRUFILE: string;

	/**
	 * 譛\蠕後↓菴ｿ逕ｨ縺励◆繧ｻ繝�す繝ｧ繝ｳ繧帝幕縺阪∪縺吶\
	 */
	static readonly COMMAND_FILE_OPENMRUSESSION: string;

	/**
	 * 繧｢繝励Μ繧ｱ繝ｼ繧ｷ繝ｧ繝ｳ繧堤ｵゆｺ�＠縺ｾ縺吶\
	 */
	static readonly COMMAND_FILE_QUIT: string;

	/**
	 * 驕ｸ謚槭＠縺溘ヵ繧｡繧､繝ｫ繧� OS 縺ｧ陦ｨ遉ｺ縺励∪縺吶\
	 */
	static readonly COMMAND_FILE_REVEAL: string;

	/**
	 * 驕ｸ謚槭＠縺溘ヵ繧｡繧､繝ｫ繧偵Γ繝�ぅ繧｢繝悶Λ繧ｦ繧ｶ繝ｼ繝代ロ繝ｫ縺ｧ陦ｨ遉ｺ縺励∪縺吶\
	 */
	static readonly COMMAND_FILE_REVEALINMEDIABROWSER: string;

	/**
	 * 迴ｾ蝨ｨ縺ｮ繝輔ぃ繧､繝ｫ繧剃ｿ晏ｭ倥＠縺ｾ縺吶\
	 */
	static readonly COMMAND_FILE_SAVE: string;

	/**
	 * 縺吶∋縺ｦ縺ｮ繝輔ぃ繧､繝ｫ繧剃ｿ晏ｭ倥＠縺ｾ縺吶\
	 */
	static readonly COMMAND_FILE_SAVEALL: string;

	/**
	 * 縺吶∋縺ｦ縺ｮ繧ｪ繝ｼ繝�ぅ繧ｪ繝輔ぃ繧､繝ｫ繧堤音螳壹�蠖｢蠑上〒菫晏ｭ倥＠縺ｾ縺吶\
	 */
	static readonly COMMAND_FILE_SAVEALLAUDIOASBATCHPROCESS: string;

	/**
	 * 迴ｾ蝨ｨ縺ｮ繝輔ぃ繧､繝ｫ繧呈眠隕上ヵ繧｡繧､繝ｫ縺ｫ菫晏ｭ倥＠縺ｾ縺吶\
	 */
	static readonly COMMAND_FILE_SAVEAS: string;

	/**
	 * 譁ｰ隕上ヵ繧｡繧､繝ｫ縺ｫ迴ｾ蝨ｨ縺ｮ驕ｸ謚樒ｯ�峇繧剃ｿ晏ｭ倥＠縺ｾ縺吶\
	 */
	static readonly COMMAND_FILE_SAVESELECTIONAS: string;

	/**
	 * 髢九＞縺ｦ縺�ｋ谺｡縺ｮ繝輔ぃ繧､繝ｫ縺ｫ蛻�ｊ譖ｿ縺医∪縺吶\
	 */
	static readonly COMMAND_FILE_SWITCHTONEXTFILE: string;

	/**
	 * 髢九＞縺ｦ縺�ｋ蜑阪�繝輔ぃ繧､繝ｫ縺ｫ蛻�ｊ譖ｿ縺医∪縺吶\
	 */
	static readonly COMMAND_FILE_SWITCHTOPREVIOUSFILE: string;

	/**
	 * 繝舌�繧ｸ繝ｧ繝ｳ諠⒦ ｱ繝\繧､繧｢繝ｭ繧ｰ繧帝幕縺阪∪縺吶\
	 */
	static readonly COMMAND_HELP_ABOUT: string;

	/**
	 * 繧｢繝峨が繝ｳ繧貞盾辣ｧ縺励∪縺吶\
	 */
	static readonly COMMAND_HELP_ADDONS: string;

	/**
	 * Audition 繝倥Ν繝励ｒ髢九″縺ｾ縺吶\
	 */
	static readonly COMMAND_HELP_ADOBEAUDITIONHELP: string;

	/**
	 * SDK 縺ｨ莉悶�髢狗匱閠⒤Μ繧ｽ繝ｼ繧ｹ繧偵ム繧ｦ繝ｳ繝ｭ繝ｼ繝峨＠縺ｾ縺吶\
	 */
	static readonly COMMAND_HELP_DEVELOPERCENTER: string;

	/**
	 * 繧ｨ繝輔ぉ繧ｯ繝医ｄ縺昴�莉悶�繧ｳ繝ｳ繝�Φ繝�ｒ繝\繧ｦ繝ｳ繝ｭ繝ｼ繝峨＠縺ｾ縺吶\
	 */
	static readonly COMMAND_HELP_DOWNLOAD: string;

	/**
	 * 陬ｽ蜩∝髄荳翫�繝ｭ繧ｰ繝ｩ繝 繧ｪ繝励す繝ｧ繝ｳ縺ｮ繝\繧､繧｢繝ｭ繧ｰ繧帝幕縺阪∪縺吶\
	 */
	static readonly COMMAND_HELP_IMPROVEMENTPROGRAM: string;

	/**
	 * Audition 繧ｭ繝ｼ繝懊�繝峨す繝ｧ繝ｼ繝医き繝�ヨ縺ｮ繝倥Ν繝励↓遘ｻ蜍輔＠縺ｾ縺吶\
	 */
	static readonly COMMAND_HELP_KEYBOARDSHORTCUTS: string;

	/**
	 * Audition 繝ｩ繝ｼ繝九Φ繧ｰ繧帝幕縺阪∪縺吶\
	 */
	static readonly COMMAND_HELP_ONBOARDING: string;

	/**
	 * Adobe Audition 縺ｮ繝ｭ繧ｰ繝輔ぃ繧､繝ｫ繧� OS 縺ｧ陦ｨ遉ｺ縺励∪縺吶\
	 */
	static readonly COMMAND_HELP_REVEALLOGFILES: string;

	/**
	 * 繝舌げ縺ｮ蝣ｱ蜻翫∪縺溘�讖溯�謾ｹ蝟��繝ｪ繧ｯ繧ｨ繧ｹ繝医ｒ騾∽ｿ｡縺励∪縺吶\
	 */
	static readonly COMMAND_HELP_SENDFEEDBACK: string;

	/**
	 * Audition 繧ｵ繝昴�繝医そ繝ｳ繧ｿ繝ｼ縺ｫ遘ｻ蜍輔＠縺ｾ縺吶\
	 */
	static readonly COMMAND_HELP_SUPPORTCENTER: string;

	/**
	 * Audition 繝ｦ繝ｼ繧ｶ繝ｼ繝輔か繝ｼ繝ｩ繝 縺ｫ遘ｻ蜍輔＠縺ｾ縺吶\
	 */
	static readonly COMMAND_HELP_USERFORUMS: string;

	/**
	 * End 繧ｭ繝ｼ繧貞ｮ溯｡後＠縺ｾ縺吶\
	 */
	static readonly COMMAND_KEYBOARD_END: string;

	/**
	 * Enter 繧ｭ繝ｼ繧貞ｮ溯｡後＠縺ｾ縺吶\
	 */
	static readonly COMMAND_KEYBOARD_ENTER: string;

	/**
	 * Esc 繧ｭ繝ｼ繧貞ｮ溯｡後＠縺ｾ縺吶\
	 */
	static readonly COMMAND_KEYBOARD_ESCAPE: string;

	/**
	 * Home 繧ｭ繝ｼ繧貞ｮ溯｡後＠縺ｾ縺吶\
	 */
	static readonly COMMAND_KEYBOARD_HOME: string;

	/**
	 * 蜿ｯ螟峨ヴ繝ｼ繧ｯ繧定｡ｨ遉ｺ縺励∪縺吶\
	 */
	static readonly COMMAND_METERING_DYNAMICPEAKS: string;

	/**
	 * 繧ｯ繝ｪ繝��繧､繝ｳ繧ｸ繧ｱ繝ｼ繧ｿ繝ｼ繧偵Μ繧ｻ繝�ヨ縺励∪縺吶\
	 */
	static readonly COMMAND_METERING_RESETINDICATORS: string;

	/**
	 * 繝ｬ繝吶Ν繝｡繝ｼ繧ｿ繝ｼ縺ｮ遽�峇繧� 120dB 縺ｫ險ｭ螳壹＠縺ｾ縺吶\
	 */
	static readonly COMMAND_METERING_SET120DBRANGE: string;

	/**
	 * 繝ｬ繝吶Ν繝｡繝ｼ繧ｿ繝ｼ縺ｮ遽�峇繧� 24dB 縺ｫ險ｭ螳壹＠縺ｾ縺吶\
	 */
	static readonly COMMAND_METERING_SET24DBRANGE: string;

	/**
	 * 繝ｬ繝吶Ν繝｡繝ｼ繧ｿ繝ｼ縺ｮ遽�峇繧� 48dB 縺ｫ險ｭ螳壹＠縺ｾ縺吶\
	 */
	static readonly COMMAND_METERING_SET48DBRANGE: string;

	/**
	 * 繝ｬ繝吶Ν繝｡繝ｼ繧ｿ繝ｼ縺ｮ遽�峇繧� 60dB 縺ｫ險ｭ螳壹＠縺ｾ縺吶\
	 */
	static readonly COMMAND_METERING_SET60DBRANGE: string;

	/**
	 * 繝ｬ繝吶Ν繝｡繝ｼ繧ｿ繝ｼ縺ｮ遽�峇繧� 72dB 縺ｫ險ｭ螳壹＠縺ｾ縺吶\
	 */
	static readonly COMMAND_METERING_SET72DBRANGE: string;

	/**
	 * 繝ｬ繝吶Ν繝｡繝ｼ繧ｿ繝ｼ縺ｮ遽�峇繧� 96dB 縺ｫ險ｭ螳壹＠縺ｾ縺吶\
	 */
	static readonly COMMAND_METERING_SET96DBRANGE: string;

	/**
	 * 繝｡繝ｼ繧ｿ繝ｼ繝舌�繧� LED 陦ｨ遉ｺ縺励∪縺吶\
	 */
	static readonly COMMAND_METERING_SHOWLEDMETERS: string;

	/**
	 * 繝｡繝ｼ繧ｿ繝ｼ繝舌�繧偵き繝ｩ繝ｼ繧ｰ繝ｩ繝��繧ｷ繝ｧ繝ｳ陦ｨ遉ｺ縺励∪縺吶\
	 */
	static readonly COMMAND_METERING_SHOWMETERBARSGRADIENT: string;

	/**
	 * 譛\蟆丞\､繧定｡ｨ遉ｺ縺励∪縺吶\
	 */
	static readonly COMMAND_METERING_SHOWVALLEYS: string;

	/**
	 * 蝗ｺ螳壹ヴ繝ｼ繧ｯ繧定｡ｨ遉ｺ縺励∪縺吶\
	 */
	static readonly COMMAND_METERING_STATICPEAKS: string;

	/**
	 * 蜈･蜉帙�險域ｸｬ繧呈怏蜉ｹ縺ｫ縺励∪縺吶\
	 */
	static readonly COMMAND_METERING_TOGGLEMETERINPUTSIGNAL: string;

	/**
	 * 譁ｰ隕� 5.1 繧ｪ繝ｼ繝�ぅ繧ｪ繝医Λ繝�け繧定ｿｽ蜉 縺励∪縺吶\
	 */
	static readonly COMMAND_MULTITRACK_ADD51AUDIOTRACK: string;

	/**
	 * 譁ｰ隕� 5.1 繝舌せ繝医Λ繝�け繧定ｿｽ蜉 縺励∪縺吶\
	 */
	static readonly COMMAND_MULTITRACK_ADD51BUSTRACK: string;

	/**
	 * 譁ｰ隕上Δ繝弱Λ繝ｫ繧ｪ繝ｼ繝�ぅ繧ｪ繝医Λ繝�け繧定ｿｽ蜉 縺励∪縺吶\
	 */
	static readonly COMMAND_MULTITRACK_ADDMONOAUDIOTRACK: string;

	/**
	 * 譁ｰ隕上Δ繝弱Λ繝ｫ繝舌せ繝医Λ繝�け繧定ｿｽ蜉 縺励∪縺吶\
	 */
	static readonly COMMAND_MULTITRACK_ADDMONOBUSTRACK: string;

	/**
	 * 譁ｰ隕上せ繝�Ξ繧ｪ繧ｪ繝ｼ繝�ぅ繧ｪ繝医Λ繝�け繧定ｿｽ蜉 縺励∪縺吶\
	 */
	static readonly COMMAND_MULTITRACK_ADDSTEREOAUDIOTRACK: string;

	/**
	 * 譁ｰ隕上せ繝�Ξ繧ｪ繝舌せ繝医Λ繝�け繧定ｿｽ蜉 縺励∪縺吶\
	 */
	static readonly COMMAND_MULTITRACK_ADDSTEREOBUSTRACK: string;

	/**
	 * 1 縺､莉･荳翫�繝医Λ繝�け繧定ｿｽ蜉 縺励∪縺吶\
	 */
	static readonly COMMAND_MULTITRACK_ADDTRACKS: string;

	/**
	 * 譁ｰ隕上ン繝�が繝医Λ繝�け繧定ｿｽ蜉 縺励∪縺吶\
	 */
	static readonly COMMAND_MULTITRACK_ADDVIDEOTRACK: string;

	/**
	 * 驕ｸ謚槭＠縺溘ヨ繝ｩ繝�け繧呈眠隕上ヨ繝ｩ繝�け縺ｫ繝舌え繝ｳ繧ｹ縺励∪縺吶\
	 */
	static readonly COMMAND_MULTITRACK_BOUNCESELECTEDTRACKTONEWTRACK: string;

	/**
	 * 譎る俣驕ｸ謚樒ｯ�峇蜀⒤�驕ｸ謚槭＠縺溘け繝ｪ繝��繧呈眠隕上ヨ繝ｩ繝�け縺ｫ繝舌え繝ｳ繧ｹ縺励∪縺吶\
	 */
	static readonly COMMAND_MULTITRACK_BOUNCETONEWTRACKSELECTEDCLIPSINRANGE: string;

	/**
	 * 驕ｸ謚槭＠縺溘け繝ｪ繝��縺ｮ縺ｿ繧呈眠隕上ヨ繝ｩ繝�け縺ｫ繝舌え繝ｳ繧ｹ縺励∪縺吶\
	 */
	static readonly COMMAND_MULTITRACK_BOUNCETONEWTRACKSELECTEDCLIPSONLY: string;

	/**
	 * 譎る俣驕ｸ謚樒ｯ�峇繧呈眠隕上ヨ繝ｩ繝�け縺ｫ繝舌え繝ｳ繧ｹ縺励∪縺吶\
	 */
	static readonly COMMAND_MULTITRACK_BOUNCETONEWTRACKTIMESELECTIONRANGE: string;

	/**
	 * 繧ｳ繝ｳ繝�Φ繝��縺ｪ縺�が繝ｼ繝�ぅ繧ｪ縺翫ｈ縺ｳ繝薙ョ繧ｪ繝医Λ繝�け繧貞炎髯､縺励∪縺吶\
	 */
	static readonly COMMAND_MULTITRACK_DELETEEMPTYTRACKS: string;

	/**
	 * 迴ｾ蝨ｨ驕ｸ謚槭＆繧後※縺�ｋ繝医Λ繝�け繧貞炎髯､縺励∪縺吶\
	 */
	static readonly COMMAND_MULTITRACK_DELETETRACK: string;

	/**
	 * 繝医Λ繝�け繧定､㍻｣ｽ縺励∪縺吶\
	 */
	static readonly COMMAND_MULTITRACK_DUPLICATETRACK: string;

	/**
	 * 繝｡繝医Ο繝弱�繝 繝代ち繝ｼ繝ｳ繧堤ｷｨ髮�＠縺ｾ縺吶\
	 */
	static readonly COMMAND_MULTITRACK_EDITMETRONOMEPATTERN: string;

	/**
	 * 繧ｯ繝ｪ繝��繧ｭ繝ｼ繝輔Ξ繝ｼ繝 繝弱�繝峨ｒ陦ｨ遉ｺ縺励※邱ｨ髮�ｒ譛牙柑縺ｫ縺励∪縺吶\
	 */
	static readonly COMMAND_MULTITRACK_ENABLECLIPKEYFRAMEEDITING: string;

	/**
	 * 謗剃ｻ也噪縺ｫ驕ｸ謚槭＆繧後◆繝医Λ繝�け縺ｮ繧ｽ繝ｭ繧貞�繧頑崛縺医∪縺吶\
	 */
	static readonly COMMAND_MULTITRACK_EXCLUSIVELYTOGGLESOLOFORSELECTED: string;

	/**
	 * 迴ｾ蝨ｨ驕ｸ謚槭＆繧後※縺�ｋ繝医Λ繝�け繧帝撼陦ｨ遉ｺ縺ｫ縺励∪縺吶\
	 */
	static readonly COMMAND_MULTITRACK_HIDESELECTEDTRACKS: string;

	/**
	 * 謖㍾ｮ壹＠縺溘ヵ繧｡繧､繝ｫ繧定ｪｭ縺ｿ霎ｼ縺ｿ縲√い繧ｯ繝�ぅ繝悶↑繧ｻ繝�す繝ｧ繝ｳ縺ｫ繧ｯ繝ｪ繝��縺ｨ縺励※謖ｿ蜈･縺励∪縺吶\
	 */
	static readonly COMMAND_MULTITRACK_IMPORTANDINSERTFILESASCLIPS: string;

	/**
	 * 繝励Μ繧ｻ繝�ヨ 1 縺九ｉ繝医Λ繝�け縺ｮ陦ｨ遉ｺ繧定ｪｭ縺ｿ霎ｼ縺ｿ縺ｾ縺吶\
	 */
	static readonly COMMAND_MULTITRACK_LOADTRACKVISIBILITY1: string;

	/**
	 * 繝励Μ繧ｻ繝�ヨ 2 縺九ｉ繝医Λ繝�け縺ｮ陦ｨ遉ｺ繧定ｪｭ縺ｿ霎ｼ縺ｿ縺ｾ縺吶\
	 */
	static readonly COMMAND_MULTITRACK_LOADTRACKVISIBILITY2: string;

	/**
	 * 繝励Μ繧ｻ繝�ヨ 3 縺九ｉ繝医Λ繝�け縺ｮ陦ｨ遉ｺ繧定ｪｭ縺ｿ霎ｼ縺ｿ縺ｾ縺吶\
	 */
	static readonly COMMAND_MULTITRACK_LOADTRACKVISIBILITY3: string;

	/**
	 * 繝励Μ繧ｻ繝�ヨ 4 縺九ｉ繝医Λ繝�け縺ｮ陦ｨ遉ｺ繧定ｪｭ縺ｿ霎ｼ縺ｿ縺ｾ縺吶\
	 */
	static readonly COMMAND_MULTITRACK_LOADTRACKVISIBILITY4: string;

	/**
	 * 繝励Μ繧ｻ繝�ヨ 5 縺九ｉ繝医Λ繝�け縺ｮ陦ｨ遉ｺ繧定ｪｭ縺ｿ霎ｼ縺ｿ縺ｾ縺吶\
	 */
	static readonly COMMAND_MULTITRACK_LOADTRACKVISIBILITY5: string;

	/**
	 * 繝励Μ繧ｻ繝�ヨ 6 縺九ｉ繝医Λ繝�け縺ｮ陦ｨ遉ｺ繧定ｪｭ縺ｿ霎ｼ縺ｿ縺ｾ縺吶\
	 */
	static readonly COMMAND_MULTITRACK_LOADTRACKVISIBILITY6: string;

	/**
	 * 繝励Μ繧ｻ繝�ヨ 7 縺九ｉ繝医Λ繝�け縺ｮ陦ｨ遉ｺ繧定ｪｭ縺ｿ霎ｼ縺ｿ縺ｾ縺吶\
	 */
	static readonly COMMAND_MULTITRACK_LOADTRACKVISIBILITY7: string;

	/**
	 * 繝励Μ繧ｻ繝�ヨ 8 縺九ｉ繝医Λ繝�け縺ｮ陦ｨ遉ｺ繧定ｪｭ縺ｿ霎ｼ縺ｿ縺ｾ縺吶\
	 */
	static readonly COMMAND_MULTITRACK_LOADTRACKVISIBILITY8: string;

	/**
	 * 繝励Μ繧ｻ繝�ヨ 9 縺九ｉ繝医Λ繝�け縺ｮ陦ｨ遉ｺ繧定ｪｭ縺ｿ霎ｼ縺ｿ縺ｾ縺吶\
	 */
	static readonly COMMAND_MULTITRACK_LOADTRACKVISIBILITY9: string;

	/**
	 * 迴ｾ蝨ｨ驕ｸ謚槭＆繧後※縺�ｋ繝医Λ繝�け繧呈怙蟆丞喧縺励∪縺吶\
	 */
	static readonly COMMAND_MULTITRACK_MINIMIZESELECTEDTRACK: string;

	/**
	 * 繝槭せ繧ｿ繝ｼ繝医Λ繝�け縺ｮ蜃ｺ蜉帛Ⅹ菴薙ｒ譁ｰ隕上�譛ｪ菫晏ｭ倥�繝輔ぃ繧､繝ｫ縺ｫ繝溘ャ繧ｯ繧ｹ繝\繧ｦ繝ｳ縺励∪縺吶\
	 */
	static readonly COMMAND_MULTITRACK_MIXDOWNALLTONEWFILE: string;

	/**
	 * 驕ｸ謚槭＆繧後◆繧ｯ繝ｪ繝��縺ｮ繝槭せ繧ｿ繝ｼ繝医Λ繝�け縺ｮ蜃ｺ蜉帙ｒ縲∽ｿ晏ｭ倥＆繧後※縺�↑縺�眠縺励＞繝輔ぃ繧､繝ｫ縺ｫ繝溘ャ繧ｯ繧ｹ繝\繧ｦ繝ｳ縺励∪縺吶\
	 */
	static readonly COMMAND_MULTITRACK_MIXDOWNSELECTEDCLIPSTONEWFILE: string;

	/**
	 * 繝槭せ繧ｿ繝ｼ繝医Λ繝�け縺ｮ譎る俣驕ｸ謚樒ｯ�峇縺ｮ蜃ｺ蜉帙ｒ譁ｰ隕乗悴菫晏ｭ倥�繝輔ぃ繧､繝ｫ縺ｫ繝溘ャ繧ｯ繧ｹ繝\繧ｦ繝ｳ縺励∪縺吶\
	 */
	static readonly COMMAND_MULTITRACK_MIXDOWNSELECTIONTONEWFILE: string;

	/**
	 * 迴ｾ蝨ｨ驕ｸ謚槭＆繧後※縺�ｋ繝医Λ繝�け繧剃ｸ九↓遘ｻ蜍輔＠縺ｾ縺吶\
	 */
	static readonly COMMAND_MULTITRACK_MOVETRACKDOWN: string;

	/**
	 * 迴ｾ蝨ｨ驕ｸ謚槭＆繧後※縺�ｋ繝医Λ繝�け繧剃ｸ翫↓遘ｻ蜍輔＠縺ｾ縺吶\
	 */
	static readonly COMMAND_MULTITRACK_MOVETRACKUP: string;

	/**
	 * 髱樊賜莉也噪縺ｫ驕ｸ謚槭＆繧後◆繝医Λ繝�け縺ｮ繧ｽ繝ｭ繧貞�繧頑崛縺医∪縺吶\
	 */
	static readonly COMMAND_MULTITRACK_NONEXCLUSIVELYTOGGLESOLOFORSELECTED: string;

	/**
	 * Adobe Premiere Pro 縺ｧ髢九￥縺薙→縺ｮ縺ｧ縺阪ｋ譁ｰ隕� XML 繝輔ぃ繧､繝ｫ縺ｫ迴ｾ蝨ｨ縺ｮ繧ｻ繝�す繝ｧ繝ｳ繧呈嶌縺榊�縺励∪縺吶\
	 */
	static readonly COMMAND_MULTITRACK_PREMIEREPROXMLSEQUENCE: string;

	/**
	 * 迴ｾ蝨ｨ縺ｮ繝医Λ繝�け縺ｮ陦ｨ遉ｺ繧偵�繝ｪ繧ｻ繝�ヨ 1 縺ｫ菫晏ｭ倥＠縺ｾ縺吶\
	 */
	static readonly COMMAND_MULTITRACK_SAVETRACKVISIBILITY1: string;

	/**
	 * 迴ｾ蝨ｨ縺ｮ繝医Λ繝�け縺ｮ陦ｨ遉ｺ繧偵�繝ｪ繧ｻ繝�ヨ 2 縺ｫ菫晏ｭ倥＠縺ｾ縺吶\
	 */
	static readonly COMMAND_MULTITRACK_SAVETRACKVISIBILITY2: string;

	/**
	 * 迴ｾ蝨ｨ縺ｮ繝医Λ繝�け縺ｮ陦ｨ遉ｺ繧偵�繝ｪ繧ｻ繝�ヨ 3 縺ｫ菫晏ｭ倥＠縺ｾ縺吶\
	 */
	static readonly COMMAND_MULTITRACK_SAVETRACKVISIBILITY3: string;

	/**
	 * 迴ｾ蝨ｨ縺ｮ繝医Λ繝�け縺ｮ陦ｨ遉ｺ繧偵�繝ｪ繧ｻ繝�ヨ 4 縺ｫ菫晏ｭ倥＠縺ｾ縺吶\
	 */
	static readonly COMMAND_MULTITRACK_SAVETRACKVISIBILITY4: string;

	/**
	 * 迴ｾ蝨ｨ縺ｮ繝医Λ繝�け縺ｮ陦ｨ遉ｺ繧偵�繝ｪ繧ｻ繝�ヨ 5 縺ｫ菫晏ｭ倥＠縺ｾ縺吶\
	 */
	static readonly COMMAND_MULTITRACK_SAVETRACKVISIBILITY5: string;

	/**
	 * 迴ｾ蝨ｨ縺ｮ繝医Λ繝�け縺ｮ陦ｨ遉ｺ繧偵�繝ｪ繧ｻ繝�ヨ 6 縺ｫ菫晏ｭ倥＠縺ｾ縺吶\
	 */
	static readonly COMMAND_MULTITRACK_SAVETRACKVISIBILITY6: string;

	/**
	 * 迴ｾ蝨ｨ縺ｮ繝医Λ繝�け縺ｮ陦ｨ遉ｺ繧偵�繝ｪ繧ｻ繝�ヨ 7 縺ｫ菫晏ｭ倥＠縺ｾ縺吶\
	 */
	static readonly COMMAND_MULTITRACK_SAVETRACKVISIBILITY7: string;

	/**
	 * 迴ｾ蝨ｨ縺ｮ繝医Λ繝�け縺ｮ陦ｨ遉ｺ繧偵�繝ｪ繧ｻ繝�ヨ 8 縺ｫ菫晏ｭ倥＠縺ｾ縺吶\
	 */
	static readonly COMMAND_MULTITRACK_SAVETRACKVISIBILITY8: string;

	/**
	 * 迴ｾ蝨ｨ縺ｮ繝医Λ繝�け縺ｮ陦ｨ遉ｺ繧偵�繝ｪ繧ｻ繝�ヨ 9 縺ｫ菫晏ｭ倥＠縺ｾ縺吶\
	 */
	static readonly COMMAND_MULTITRACK_SAVETRACKVISIBILITY9: string;

	/**
	 * 驕ｸ謚樒ｯ�峇繧呈ｬ｡縺ｮ繝医Λ繝�け縺ｫ遘ｻ蜍輔＠縺ｾ縺吶\
	 */
	static readonly COMMAND_MULTITRACK_SELECTNEXTTRACK: string;

	/**
	 * 驕ｸ謚樒ｯ�峇繧貞燕縺ｮ繝医Λ繝�け縺ｫ遘ｻ蜍輔＠縺ｾ縺吶\
	 */
	static readonly COMMAND_MULTITRACK_SELECTPREVIOUSTRACK: string;

	/**
	 * 繝｡繝医Ο繝弱�繝 縺ｮ繧ｵ繧ｦ繝ｳ繝峨ち繧､繝励ｒ繧｢繝輔Μ繧ｫ 1 縺ｫ險ｭ螳壹＠縺ｾ縺吶\
	 */
	static readonly COMMAND_MULTITRACK_SETMETRONOMESOUNDTYPEAFRICAN1: string;

	/**
	 * 繝｡繝医Ο繝弱�繝 縺ｮ繧ｵ繧ｦ繝ｳ繝峨ち繧､繝励ｒ繧｢繝輔Μ繧ｫ 2 縺ｫ險ｭ螳壹＠縺ｾ縺吶\
	 */
	static readonly COMMAND_MULTITRACK_SETMETRONOMESOUNDTYPEAFRICAN2: string;

	/**
	 * 繝｡繝医Ο繝弱�繝 縺ｮ繧ｵ繧ｦ繝ｳ繝峨ち繧､繝励ｒ繝薙�繝励↓險ｭ螳壹＠縺ｾ縺吶\
	 */
	static readonly COMMAND_MULTITRACK_SETMETRONOMESOUNDTYPEBEEPS: string;

	/**
	 * 繝｡繝医Ο繝弱�繝 縺ｮ繧ｵ繧ｦ繝ｳ繝峨ち繧､繝励ｒ繧ｷ繝ｳ繝舌Ν縺ｫ險ｭ螳壹＠縺ｾ縺吶\
	 */
	static readonly COMMAND_MULTITRACK_SETMETRONOMESOUNDTYPECYMBALS: string;

	/**
	 * 繝｡繝医Ο繝弱�繝 縺ｮ繧ｵ繧ｦ繝ｳ繝峨ち繧､繝励ｒ繧ｭ繝�ヨ縺ｫ險ｭ螳壹＠縺ｾ縺吶\
	 */
	static readonly COMMAND_MULTITRACK_SETMETRONOMESOUNDTYPEKIT: string;

	/**
	 * 繝｡繝医Ο繝弱�繝 縺ｮ繧ｵ繧ｦ繝ｳ繝峨ち繧､繝励ｒ繝ｩ繝�Φ 1 縺ｫ險ｭ螳壹＠縺ｾ縺吶\
	 */
	static readonly COMMAND_MULTITRACK_SETMETRONOMESOUNDTYPELATIN1: string;

	/**
	 * 繝｡繝医Ο繝弱�繝 縺ｮ繧ｵ繧ｦ繝ｳ繝峨ち繧､繝励ｒ繝ｩ繝�Φ 2 縺ｫ險ｭ螳壹＠縺ｾ縺吶\
	 */
	static readonly COMMAND_MULTITRACK_SETMETRONOMESOUNDTYPELATIN2: string;

	/**
	 * 繝｡繝医Ο繝弱�繝 縺ｮ繧ｵ繧ｦ繝ｳ繝峨ち繧､繝励ｒ繝ｩ繝�Φ 3 縺ｫ險ｭ螳壹＠縺ｾ縺吶\
	 */
	static readonly COMMAND_MULTITRACK_SETMETRONOMESOUNDTYPELATIN3: string;

	/**
	 * 繝｡繝医Ο繝弱�繝 縺ｮ繧ｵ繧ｦ繝ｳ繝峨ち繧､繝励ｒ繧ｹ繝�ぅ繝�け縺ｫ險ｭ螳壹＠縺ｾ縺吶\
	 */
	static readonly COMMAND_MULTITRACK_SETMETRONOMESOUNDTYPESTICKS: string;

	/**
	 * 繝｡繝医Ο繝弱�繝 縺ｮ繧ｵ繧ｦ繝ｳ繝峨ち繧､繝励ｒ繧ｿ繝悶Λ縺ｫ險ｭ螳壹＠縺ｾ縺吶\
	 */
	static readonly COMMAND_MULTITRACK_SETMETRONOMESOUNDTYPETABLA: string;

	/**
	 * 縺吶∋縺ｦ縺ｮ繝医Λ繝�け繧定｡ｨ遉ｺ縺励∪縺吶\
	 */
	static readonly COMMAND_MULTITRACK_SHOWALLTRACKS: string;

	/**
	 * 繝舌せ繝医Λ繝�け縺ｮ縺ｿ繧定｡ｨ遉ｺ縺励∪縺吶\
	 */
	static readonly COMMAND_MULTITRACK_SHOWONLYBUSTRACKS: string;

	/**
	 * 繧ｪ繝ｼ繝�ぅ繧ｪ繝医Λ繝�け縺ｮ縺ｿ繧定｡ｨ遉ｺ縺励∪縺吶\
	 */
	static readonly COMMAND_MULTITRACK_SHOWONLYCLIPTRACKS: string;

	/**
	 * 繧ｯ繝ｪ繝��繧貞性繧\繝医Λ繝�け縺ｮ縺ｿ繧定｡ｨ遉ｺ縺励∪縺吶\
	 */
	static readonly COMMAND_MULTITRACK_SHOWONLYTRACKSWITHCLIPS: string;

	/**
	 * 迴ｾ蝨ｨ縺ｮ菴咲ｽｮ縺ｧ繧ｯ繝ｪ繝��繧貞性繧\繝医Λ繝�け縺ｮ縺ｿ繧定｡ｨ遉ｺ縺励∪縺吶\
	 */
	static readonly COMMAND_MULTITRACK_SHOWONLYTRACKSWITHCLIPSATCTI: string;

	/**
	 * 譎る俣驕ｸ謚樒ｯ�峇蜀⒤〒繧ｯ繝ｪ繝��繧貞性繧\繝医Λ繝�け縺ｮ縺ｿ繧定｡ｨ遉ｺ縺励∪縺吶\
	 */
	static readonly COMMAND_MULTITRACK_SHOWONLYTRACKSWITHTIMESELECTEDCLIPS: string;

	/**
	 * 縺吶∋縺ｦ縺ｮ繝医Λ繝�け縺ｮ骭ｲ髻ｳ逕ｨ縺ｫ貅門ｙ繧貞�繧頑崛縺医∪縺吶\
	 */
	static readonly COMMAND_MULTITRACK_TOGGLEARMFORRECORDFORALL: string;

	/**
	 * 驕ｸ謚槭＆繧後◆繝医Λ繝�け縺ｮ骭ｲ髻ｳ逕ｨ縺ｫ貅門ｙ繧貞�繧頑崛縺医∪縺吶\
	 */
	static readonly COMMAND_MULTITRACK_TOGGLEARMFORRECORDFORSELECTED: string;

	/**
	 * 繝槭Ν繝√ヨ繝ｩ繝�け繝｡繝医Ο繝弱�繝 繧貞�繧頑崛縺医∪縺吶\
	 */
	static readonly COMMAND_MULTITRACK_TOGGLEMETRONOME: string;

	/**
	 * 縺吶∋縺ｦ縺ｮ繝医Λ繝�け縺ｮ繝｢繝九ち繝ｼ蜈･蜉帙ｒ蛻�ｊ譖ｿ縺医∪縺吶\
	 */
	static readonly COMMAND_MULTITRACK_TOGGLEMONITORINPUTFORALL: string;

	/**
	 * 驕ｸ謚槭＆繧後◆繝医Λ繝�け縺ｮ繝｢繝九ち繝ｼ蜈･蜉帙ｒ蛻�ｊ譖ｿ縺医∪縺吶\
	 */
	static readonly COMMAND_MULTITRACK_TOGGLEMONITORINPUTFORSELECTED: string;

	/**
	 * 縺吶∋縺ｦ縺ｮ繝医Λ繝�け縺ｮ繝溘Η繝ｼ繝医ｒ蛻�ｊ譖ｿ縺医∪縺吶\
	 */
	static readonly COMMAND_MULTITRACK_TOGGLEMUTEFORALL: string;

	/**
	 * 驕ｸ謚槭＆繧後◆繝医Λ繝�け縺ｮ繝溘Η繝ｼ繝医ｒ蛻�ｊ譖ｿ縺医∪縺吶\
	 */
	static readonly COMMAND_MULTITRACK_TOGGLEMUTEFORSELECTED: string;

	/**
	 * 縺吶∋縺ｦ縺ｮ繝医Λ繝�け縺ｧ繧ｽ繝ｭ繧貞�繧頑崛縺医∪縺吶\
	 */
	static readonly COMMAND_MULTITRACK_TOGGLESOLOFORALL: string;

	/**
	 * 驕ｸ謚槭＆繧後◆繝医Λ繝�け縺ｮ繧ｽ繝ｭ繧貞ｮ牙Ⅹ縺ｫ蛻�ｊ譖ｿ縺医∪縺吶\
	 */
	static readonly COMMAND_MULTITRACK_TOGGLESOLOSAFEFORSELECTED: string;

	/**
	 * 驕ｸ謚槭＠縺溘ヨ繝ｩ繝�け繧ｫ繝ｩ繝ｼ繧貞､画峩縺吶ｋ縺溘ａ縺ｮ繝医Λ繝�け繧ｫ繝ｩ繝ｼ繝\繧､繧｢繝ｭ繧ｰ繧定｡ｨ遉ｺ縺励∪縺吶\
	 */
	static readonly COMMAND_MULTITRACK_TRACKCOLORDIALOG: string;

	/**
	 * 迺ｰ蠅�ｨｭ螳壹ム繧､繧｢繝ｭ繧ｰ縺ｧ繧ｪ繝ｼ繝�ぅ繧ｪ繝√Ε繝ｳ繝阪Ν縺ｮ繝槭ャ繝斐Φ繧ｰ繝代ロ繝ｫ繧帝幕縺阪∪縺吶\
	 */
	static readonly COMMAND_PREFERENCES_AUDIOCHANNELMAPPING: string;

	/**
	 * 迺ｰ蠅�ｨｭ螳壹ム繧､繧｢繝ｭ繧ｰ縺ｧ繧ｪ繝ｼ繝�ぅ繧ｪ繝上�繝峨え繧ｧ繧｢繝代ロ繝ｫ繧帝幕縺阪∪縺吶\
	 */
	static readonly COMMAND_PREFERENCES_AUDIOHARDWARE: string;

	/**
	 * 迺ｰ蠅�ｨｭ螳壹ム繧､繧｢繝ｭ繧ｰ縺ｧ閾ｪ蜍穂ｿ晏ｭ倥ヱ繝阪Ν繧帝幕縺阪∪縺吶\
	 */
	static readonly COMMAND_PREFERENCES_AUTOSAVE: string;

	/**
	 * 迺ｰ蠅�ｨｭ螳壹ム繧､繧｢繝ｭ繧ｰ縺ｧ繧ｳ繝ｳ繝医Ο繝ｼ繝ｫ繧ｵ繝ｼ繝輔ぉ繧ｹ繝代ロ繝ｫ繧帝幕縺阪∪縺吶\
	 */
	static readonly COMMAND_PREFERENCES_CONTROLSURFACE: string;

	/**
	 * 迺ｰ蠅�ｨｭ螳壹ム繧､繧｢繝ｭ繧ｰ縺ｧ繝��繧ｿ繝代ロ繝ｫ繧帝幕縺阪∪縺吶\
	 */
	static readonly COMMAND_PREFERENCES_DATA: string;

	/**
	 * 迺ｰ蠅�ｨｭ螳壹ム繧､繧｢繝ｭ繧ｰ縺ｧ繧ｨ繝輔ぉ繧ｯ繝医ヱ繝阪Ν繧帝幕縺阪∪縺吶\
	 */
	static readonly COMMAND_PREFERENCES_EFFECTS: string;

	/**
	 * 迺ｰ蠅�ｨｭ螳壹ム繧､繧｢繝ｭ繧ｰ縺ｧ荳\闊ｬ險ｭ螳壹ヱ繝阪Ν繧帝幕縺阪∪縺吶\
	 */
	static readonly COMMAND_PREFERENCES_GENERAL: string;

	/**
	 * 迺ｰ蠅�ｨｭ螳壹�譛\蠕後↓繧｢繧ｯ繧ｻ繧ｹ縺励◆繝代ロ繝ｫ繧帝幕縺阪∪縺吶\
	 */
	static readonly COMMAND_PREFERENCES_LASTPANE: string;

	/**
	 * 迺ｰ蠅�ｨｭ螳壹ム繧､繧｢繝ｭ繧ｰ縺ｧ繝｡繧ｿ繝��繧ｿ縺ｨ繝�ぅ繧ｹ繧ｯ繧ｭ繝｣繝�す繝･繝代ロ繝ｫ繧帝幕縺阪∪縺吶\
	 */
	static readonly COMMAND_PREFERENCES_MEDIA: string;

	/**
	 * 迺ｰ蠅�ｨｭ螳壹ム繧､繧｢繝ｭ繧ｰ縺ｧ繝｡繝｢繝ｪ繝代ロ繝ｫ繧帝幕縺阪∪縺吶\
	 */
	static readonly COMMAND_PREFERENCES_MEMORY: string;

	/**
	 * 迺ｰ蠅�ｨｭ螳壹ム繧､繧｢繝ｭ繧ｰ縺ｧ繝槭�繧ｫ繝ｼ縺ｨ繝｡繧ｿ繝��繧ｿ繝代ロ繝ｫ繧帝幕縺阪∪縺吶\
	 */
	static readonly COMMAND_PREFERENCES_METADATA: string;

	/**
	 * 迺ｰ蠅�ｨｭ螳壹ム繧､繧｢繝ｭ繧ｰ縺ｧ繝槭Ν繝√ヨ繝ｩ繝�け繝代ロ繝ｫ繧帝幕縺阪∪縺吶\
	 */
	static readonly COMMAND_PREFERENCES_MULTITRACK: string;

	/**
	 * 迺ｰ蠅�ｨｭ螳壹ム繧､繧｢繝ｭ繧ｰ縺ｧ繝槭Ν繝√ヨ繝ｩ繝�け繧ｯ繝ｪ繝��繝代ロ繝ｫ繧帝幕縺阪∪縺吶\
	 */
	static readonly COMMAND_PREFERENCES_MULTITRACKCLIPS: string;

	/**
	 * 迺ｰ蠅�ｨｭ螳壹ム繧､繧｢繝ｭ繧ｰ縺ｮ蜀咲函縺ｨ骭ｲ髻ｳ繝代ロ繝ｫ繧帝幕縺阪∪縺吶\
	 */
	static readonly COMMAND_PREFERENCES_PLAYBACK: string;

	/**
	 * 迺ｰ蠅�ｨｭ螳壹ム繧､繧｢繝ｭ繧ｰ縺ｧ繧ｹ繝壹け繝医Ν陦ｨ遉ｺ繝代ロ繝ｫ繧帝幕縺阪∪縺吶\
	 */
	static readonly COMMAND_PREFERENCES_SPECTRALDISPLAY: string;

	/**
	 * 迺ｰ蠅�ｨｭ螳壹ム繧､繧｢繝ｭ繧ｰ縺ｧ譎る俣陦ｨ遉ｺ繝代ロ繝ｫ繧帝幕縺阪∪縺吶\
	 */
	static readonly COMMAND_PREFERENCES_TIMEDISPLAY: string;

	/**
	 * 縲後ヨ繝ｩ繝�け縺碁鹸髻ｳ逕ｨ縺ｫ貅門ｙ縺輔ｌ縺ｦ縺�ｋ蝣ｴ蜷医↓蜈･蜉帙�貂ｬ螳壹ｒ譛牙柑縺ｫ縺吶ｋ縲咲腸蠅�ｨｭ螳壹ｒ蛻�ｊ譖ｿ縺医∪縺吶\
	 */
	static readonly COMMAND_PREFERENCES_TOGGLEENABLEINPUTMETERING: string;

	/**
	 * 縲後ヨ繝ｩ繝�け縺碁鹸髻ｳ逕ｨ縺ｫ貅門ｙ縺輔ｌ縺ｦ縺�ｋ蝣ｴ蜷医↓繧ｹ繝槭�繝医Δ繝九ち繝ｪ繝ｳ繧ｰ繧呈怏蜉ｹ縺ｫ縺吶ｋ縲咲腸蠅�ｨｭ螳壹ｒ蛻�ｊ譖ｿ縺医∪縺吶\
	 */
	static readonly COMMAND_PREFERENCES_TOGGLEENABLESMARTMONITORING: string;

	/**
	 * 縲悟�逕溘�繝�ラ縺ｮ繧ｹ繧ｯ繝ｩ繝匁凾縺ｫ繧ｪ繝ｼ繝�ぅ繧ｪ繧貞�逕溘\咲腸蠅�ｨｭ螳壹ｒ蛻�ｊ譖ｿ縺医∪縺吶\
	 */
	static readonly COMMAND_PREFERENCES_TOGGLEPLAYAUDIOWHILESCRUBBING: string;

	/**
	 * 縲悟�逕溘∪縺溘�骭ｲ髻ｳ縺ｮ髢句ｧ区凾縺ｫ閾ｪ蜍輔せ繧ｯ繝ｭ繝ｼ繝ｫ繧呈怏蜉ｹ縺ｫ縺吶ｋ縲咲腸蠅�ｨｭ螳壹ｒ蛻�ｊ譖ｿ縺医∪縺吶\
	 */
	static readonly COMMAND_PREFERENCES_TOGGLEPLAYBACKAUTOSCROLLENABLED: string;

	/**
	 * 縲後せ繝壹け繝医Ν蜻ｨ豕｢謨ｰ驕ｸ謚槭′蟄伜惠縺吶ｋ蝣ｴ蜷医�驕ｸ謚槭＠縺溷捉豕｢謨ｰ縺ｮ縺ｿ繧貞�逕溘\咲腸蠅�ｨｭ螳壹ｒ蛻�ｊ譖ｿ縺医∪縺吶\
	 */
	static readonly COMMAND_PREFERENCES_TOGGLEPLAYONLYSELECTEDFREQUENCIES: string;

	/**
	 * 縲碁∈謚槭＆繧後◆鬆伜沺縺ｧ蜀咲函縺碁幕蟋九＠縺溘→縺阪↓驕ｸ謚樒ｯ�峇縺ｮ譛\蠕後〒蛛懈ｭ｢縺吶ｋ縲咲腸蠅�ｨｭ螳壹ｒ蛻�ｊ譖ｿ縺医∪縺吶\
	 */
	static readonly COMMAND_PREFERENCES_TOGGLEPLAYONLYSELECTEDREGION: string;

	/**
	 * 縲悟●豁｢譎ゅ↓蜀咲函繝倥ャ繝峨ｒ髢句ｧ倶ｽ咲ｽｮ縺ｫ謌ｻ縺吶\咲腸蠅�ｨｭ螳壹ｒ蛻�ｊ譖ｿ縺医∪縺吶\
	 */
	static readonly COMMAND_PREFERENCES_TOGGLEPLAYSTYLEISLEGACY: string;

	/**
	 * 豕｢蠖｢繧ｨ繝�ぅ繧ｿ繝ｼ縺ｧ繝壹�繧ｸ蜊倅ｽ阪�閾ｪ蜍輔せ繧ｯ繝ｭ繝ｼ繝ｫ縺ｨ荳ｭ螟ｮ繧定ｻｸ縺ｫ縺励◆閾ｪ蜍輔せ繧ｯ繝ｭ繝ｼ繝ｫ繧貞�繧頑崛縺医∪縺吶\
	 */
	static readonly COMMAND_PREFERENCES_TOGGLESMOOTHSCROLLEV: string;

	/**
	 * 繝槭Ν繝√ヨ繝ｩ繝�け繧ｨ繝�ぅ繧ｿ繝ｼ縺ｧ繝壹�繧ｸ蜊倅ｽ阪�閾ｪ蜍輔せ繧ｯ繝ｭ繝ｼ繝ｫ縺ｨ荳ｭ螟ｮ繧定ｻｸ縺ｫ縺励◆閾ｪ蜍輔せ繧ｯ繝ｭ繝ｼ繝ｫ繧貞�繧頑崛縺医∪縺吶\
	 */
	static readonly COMMAND_PREFERENCES_TOGGLESMOOTHSCROLLMT: string;

	/**
	 * 縲後ラ繧ｭ繝･繝｡繝ｳ繝磯俣縺ｧ蜀咲函繝倥ャ繝峨\�∈謚樒ｯ�峇縺翫ｈ縺ｳ繧ｺ繝ｼ繝 遽�峇繧貞酔譛溘\阪ｒ蛻�ｊ譖ｿ縺医∪縺吶\
	 */
	static readonly COMMAND_PREFERENCES_TOGGLESYNCSELECTIONVIEWCTI: string;

	/**
	 * 縲後ヨ繝ｩ繝�け縺ｮ陦ｨ遉ｺ險ｭ螳壹ｒ繝溘く繧ｵ繝ｼ縺ｫ驕ｩ逕ｨ縲阪�迺ｰ蠅�ｨｭ螳壹ｒ蛻�ｊ譖ｿ縺医∪縺吶\
	 */
	static readonly COMMAND_PREFERENCES_TOGGLETRACKVISIBILITYSETTINGSAPPLYTOMIXER: string;

	/**
	 * 迺ｰ蠅�ｨｭ螳壹ム繧､繧｢繝ｭ繧ｰ縺ｧ繧｢繝斐い繝ｩ繝ｳ繧ｹ繝代ロ繝ｫ繧帝幕縺阪∪縺吶\
	 */
	static readonly COMMAND_PREFERENCES_USERINTERFACE: string;

	/**
	 * 迺ｰ蠅�ｨｭ螳壹ム繧､繧｢繝ｭ繧ｰ縺ｧ繝薙ョ繧ｪ繝代ロ繝ｫ繧帝幕縺阪∪縺吶\
	 */
	static readonly COMMAND_PREFERENCES_VIDEO: string;

	/**
	 * 繧ｹ繝壹け繝医Ν蜻ｨ豕｢謨ｰ陦ｨ遉ｺ縺ｧ繝悶Λ繧ｷ縺ｮ荳埼\乗�蠎ｦ繧剃ｽ弱￥縺励∪縺吶\
	 */
	static readonly COMMAND_TOOLS_DECREASEBRUSHOPACITY: string;

	/**
	 * 繧ｹ繝壹け繝医Ν蜻ｨ豕｢謨ｰ陦ｨ遉ｺ縺ｧ繝悶Λ繧ｷ縺ｮ繧ｵ繧､繧ｺ繧貞ｰ上＆縺上＠縺ｾ縺吶\
	 */
	static readonly COMMAND_TOOLS_DECREASEBRUSHSIZE: string;

	/**
	 * 繧ｹ繝昴ャ繝井ｿｮ蠕ｩ繝悶Λ繧ｷ繝��繝ｫ繧帝∈謚槭＠縺ｾ縺吶\
	 */
	static readonly COMMAND_TOOLS_HEALINGBRUSH: string;

	/**
	 * 繧ｹ繝壹け繝医Ν蜻ｨ豕｢謨ｰ陦ｨ遉ｺ縺ｧ繝悶Λ繧ｷ縺ｮ荳埼\乗�蠎ｦ繧帝ｫ倥￥縺励∪縺吶\
	 */
	static readonly COMMAND_TOOLS_INCREASEBRUSHOPACITY: string;

	/**
	 * 繧ｹ繝壹け繝医Ν蜻ｨ豕｢謨ｰ陦ｨ遉ｺ縺ｧ繝悶Λ繧ｷ縺ｮ繧ｵ繧､繧ｺ繧貞､ｧ縺阪￥縺励∪縺吶\
	 */
	static readonly COMMAND_TOOLS_INCREASEBRUSHSIZE: string;

	/**
	 * 縺ｪ縺偵↑繧城∈謚槭ヤ繝ｼ繝ｫ繧帝∈謚槭＠縺ｾ縺吶\
	 */
	static readonly COMMAND_TOOLS_LASSOSELECTION: string;

	/**
	 * 髟ｷ譁ｹ蠖｢驕ｸ謚槭ヤ繝ｼ繝ｫ繧帝∈謚槭＠縺ｾ縺吶\
	 */
	static readonly COMMAND_TOOLS_MARQUEESELECTION: string;

	/**
	 * 遘ｻ蜍輔ヤ繝ｼ繝ｫ繧帝∈謚槭＠縺ｾ縺吶\
	 */
	static readonly COMMAND_TOOLS_MOVE: string;

	/**
	 * 繝悶Λ繧ｷ驕ｸ謚槭ヤ繝ｼ繝ｫ繧帝∈謚槭＠縺ｾ縺吶\
	 */
	static readonly COMMAND_TOOLS_PAINTBRUSHSELECTION: string;

	/**
	 * 迴ｾ蝨ｨ縺ｮ繝ｬ繝ｼ繧ｶ繝ｼ繝��繝ｫ繧帝∈謚槭∪縺溘�蜷�Ξ繝ｼ繧ｶ繝ｼ繝��繝ｫ繧偵し繧､繧ｯ繝ｫ縺励∪縺吶\
	 */
	static readonly COMMAND_TOOLS_RAZOR: string;

	/**
	 * 縺吶∋縺ｦ縺ｮ繧ｯ繝ｪ繝��縺悟ｯｾ雎｡縺ｮ繝ｬ繝ｼ繧ｶ繝ｼ繝��繝ｫ繧帝∈謚槭＠縺ｾ縺吶\
	 */
	static readonly COMMAND_TOOLS_RAZORALLCLIPS: string;

	/**
	 * 驕ｸ謚槭＠縺溘け繝ｪ繝��縺悟ｯｾ雎｡縺ｮ繝ｬ繝ｼ繧ｶ繝ｼ繝��繝ｫ繧帝∈謚槭＠縺ｾ縺吶\
	 */
	static readonly COMMAND_TOOLS_RAZORSELECTEDCLIPS: string;

	/**
	 * 繧ｹ繝ｪ繝��繝��繝ｫ繧帝∈謚槭＠縺ｾ縺吶\
	 */
	static readonly COMMAND_TOOLS_SLIP: string;

	/**
	 * 譎る俣驕ｸ謚槭ヤ繝ｼ繝ｫ繧帝∈謚槭＠縺ｾ縺吶\
	 */
	static readonly COMMAND_TOOLS_TIMESELECTION: string;

	/**
	 * 驕ｸ謚樒ｯ�峇縺悟ｭ伜惠縺吶ｋ蝣ｴ蜷医�隗｣髯､縺励\∝�逕溘�繝�ラ繧貞ｷｦ縺ｫ遘ｻ蜍輔＠縺ｾ縺吶\
	 */
	static readonly COMMAND_TRANSPORT_COLLAPSESELECTIONLEFT: string;

	/**
	 * 驕ｸ謚樒ｯ�峇縺悟ｭ伜惠縺吶ｋ蝣ｴ蜷医�隗｣髯､縺励\∝�逕溘�繝�ラ繧� 1 繝壹�繧ｸ蟾ｦ縺ｫ遘ｻ蜍輔＠縺ｾ縺吶\
	 */
	static readonly COMMAND_TRANSPORT_COLLAPSESELECTIONPAGELEFT: string;

	/**
	 * 驕ｸ謚樒ｯ�峇縺悟ｭ伜惠縺吶ｋ蝣ｴ蜷医�隗｣髯､縺励\∝�逕溘�繝�ラ繧� 1 繝壹�繧ｸ蜿ｳ縺ｫ遘ｻ蜍輔＠縺ｾ縺吶\
	 */
	static readonly COMMAND_TRANSPORT_COLLAPSESELECTIONPAGERIGHT: string;

	/**
	 * 驕ｸ謚樒ｯ�峇縺悟ｭ伜惠縺吶ｋ蝣ｴ蜷医�隗｣髯､縺励\∝�逕溘�繝�ラ繧貞承縺ｫ遘ｻ蜍輔＠縺ｾ縺吶\
	 */
	static readonly COMMAND_TRANSPORT_COLLAPSESELECTIONRIGHT: string;

	/**
	 * 繧ｿ繧､繝 繧ｳ繝ｼ繝峨ｒ蜈･蜉帙〒縺阪ｋ繧医≧縺ｫ繝輔か繝ｼ繧ｫ繧ｹ繧偵ち繧､繝 繧ｳ繝ｼ繝峨ョ繧｣繧ｹ繝励Ξ繧､縺ｫ險ｭ螳壹＠縺ｾ縺吶\
	 */
	static readonly COMMAND_TRANSPORT_JUMPTOTIME: string;

	/**
	 * 蜀咲函繝倥ャ繝峨ｒ 1 繝壹�繧ｸ蟾ｦ縺ｫ遘ｻ蜍輔＠縺ｾ縺吶\
	 */
	static readonly COMMAND_TRANSPORT_MOVECTIPAGELEFT: string;

	/**
	 * 蜀咲函繝倥ャ繝峨ｒ 1 繝壹�繧ｸ蜿ｳ縺ｫ遘ｻ蜍輔＠縺ｾ縺吶\
	 */
	static readonly COMMAND_TRANSPORT_MOVECTIPAGERIGHT: string;

	/**
	 * 驕ｸ謚樒ｯ�峇縺悟ｭ伜惠縺吶ｋ蝣ｴ蜷医�隗｣髯､縺励\∝�逕溘�繝�ラ繧貞�鬆ｭ縺ｫ遘ｻ蜍輔＠縺ｾ縺吶\
	 */
	static readonly COMMAND_TRANSPORT_MOVECTITOBEGINNING: string;

	/**
	 * 驕ｸ謚樒ｯ�峇縺悟ｭ伜惠縺吶ｋ蝣ｴ蜷医�隗｣髯､縺励\∝�逕溘�繝�ラ繧呈忰蟆ｾ縺ｫ遘ｻ蜍輔＠縺ｾ縺吶\
	 */
	static readonly COMMAND_TRANSPORT_MOVECTITOEND: string;

	/**
	 * 蜀咲函繝倥ャ繝峨ｒ驕ｸ謚樒ｯ�峇縺ｮ繧､繝ｳ繝昴う繝ｳ繝医↓遘ｻ蜍輔＠縺ｾ縺吶\
	 */
	static readonly COMMAND_TRANSPORT_MOVECTITOINPOINT: string;

	/**
	 * 蜀咲函繝倥ャ繝峨ｒ蟾ｦ縺ｫ遘ｻ蜍
	 */
	static readonly COMMAND_TRANSPORT_MOVECTITOLEFT: string;

	/**
	 * 蜀咲函繝倥ャ繝峨�蝣ｴ謇\縺ｫ蟇ｾ縺励※縲∵ｬ｡縺ｮ逶ｮ逧��繝昴う繝ｳ繝医↓蜀咲函繝倥ャ繝峨ｒ遘ｻ蜍輔＠縺ｾ縺吶\
	 */
	static readonly COMMAND_TRANSPORT_MOVECTITONEXT: string;

	/**
	 * 蜀咲函繝倥ャ繝峨�蝣ｴ謇\縺ｫ蟇ｾ縺励※縲∵ｬ｡縺ｮ繝槭�繧ｫ繝ｼ縺ｫ蜀咲函繝倥ャ繝峨ｒ遘ｻ蜍輔＠縺ｾ縺吶\
	 */
	static readonly COMMAND_TRANSPORT_MOVECTITONEXTMARKER: string;

	/**
	 * 蜀咲函繝倥ャ繝峨ｒ驕ｸ謚樒ｯ�峇縺ｮ繧｢繧ｦ繝医�繧､繝ｳ繝医↓遘ｻ蜍輔＠縺ｾ縺吶\
	 */
	static readonly COMMAND_TRANSPORT_MOVECTITOOUTPOINT: string;

	/**
	 * 蜀咲函繝倥ャ繝峨�蝣ｴ謇\縺ｫ蟇ｾ縺励※縲∝燕縺ｮ逶ｮ逧��繝昴う繝ｳ繝医↓蜀咲函繝倥ャ繝峨ｒ遘ｻ蜍輔＠縺ｾ縺吶\
	 */
	static readonly COMMAND_TRANSPORT_MOVECTITOPREVIOUS: string;

	/**
	 * 蜀咲函繝倥ャ繝峨�蝣ｴ謇\縺ｫ蟇ｾ縺励※縲∝燕縺ｮ繝槭�繧ｫ繝ｼ縺ｫ蜀咲函繝倥ャ繝峨ｒ遘ｻ蜍輔＠縺ｾ縺吶\
	 */
	static readonly COMMAND_TRANSPORT_MOVECTITOPREVIOUSMARKER: string;

	/**
	 * 蜀咲函繝倥ャ繝峨ｒ蜿ｳ縺ｫ遘ｻ蜍
	 */
	static readonly COMMAND_TRANSPORT_MOVECTITORIGHT: string;

	/**
	 * 髢句ｧ倶ｽ咲ｽｮ縺九ｉ蜀咲函繧帝幕蟋九＠縺ｾ縺吶\
	 */
	static readonly COMMAND_TRANSPORT_PLAY: string;

	/**
	 * 譛\蠕後�繝代Φ繝√う繝ｳ繝昴う繝ｳ繝医°繧峨ヱ繝ｳ繝�ｼ�Ο繝ｼ繝ｫ繝｢繝ｼ繝峨〒骭ｲ髻ｳ繧帝幕蟋九＠縺ｾ縺吶\
	 */
	static readonly COMMAND_TRANSPORT_PUNCHAGAIN: string;

	/**
	 * 繝代Φ繝�ｼ�Ο繝ｼ繝ｫ繝｢繝ｼ繝峨〒骭ｲ髻ｳ繧帝幕蟋九＠縺ｾ縺吶\
	 */
	static readonly COMMAND_TRANSPORT_PUNCHANDROLL: string;

	/**
	 * 蟾ｦ縺ｸ繧ｷ繝｣繝医Ν縺励∪縺吶\
	 */
	static readonly COMMAND_TRANSPORT_SHUTTLELEFT: string;

	/**
	 * 蜿ｳ縺ｸ繧ｷ繝｣繝医Ν縺励∪縺吶\
	 */
	static readonly COMMAND_TRANSPORT_SHUTTLERIGHT: string;

	/**
	 * 繧ｷ繝｣繝医Ν繧貞●豁｢縺励∪縺吶\
	 */
	static readonly COMMAND_TRANSPORT_SHUTTLESTOP: string;

	/**
	 * 蜀咲函繧貞●豁｢縺励∪縺吶\
	 */
	static readonly COMMAND_TRANSPORT_STOP: string;

	/**
	 * 繝ｫ繝ｼ繝怜�逕溘�迥ｶ諷九ｒ蛻�ｊ譖ｿ縺医∪縺吶\
	 */
	static readonly COMMAND_TRANSPORT_TOGGLELOOPING: string;

	/**
	 * 蜀咲函縺翫ｈ縺ｳ骭ｲ髻ｳ繧剃ｸ\譎ょ●豁｢ | 蜀埼幕縺励∪縺吶\
	 */
	static readonly COMMAND_TRANSPORT_TOGGLEPAUSE: string;

	/**
	 * 蜀咲函繧帝幕蟋� | 蛛懈ｭ｢縺励∪縺吶\
	 */
	static readonly COMMAND_TRANSPORT_TOGGLEPLAYBACK: string;

	/**
	 * 骭ｲ髻ｳ繧帝幕蟋� | 蛛懈ｭ｢縺励∪縺吶\
	 */
	static readonly COMMAND_TRANSPORT_TOGGLERECORDING: string;

	/**
	 * 繧､繝ｳ繧ｹ繧ｿ繝ｳ繝磯鹸髻ｳ繝｢繝ｼ繝峨\√ヱ繝ｳ繝�ｼ�Ο繝ｼ繝ｫ繝｢繝ｼ繝峨\∵凾髢捺欠螳夐鹸髻ｳ繝｢繝ｼ繝峨ｒ蠕ｪ迺ｰ縺励∪縺吶\
	 */
	static readonly COMMAND_TRANSPORT_TOGGLERECORDMODE: string;

	/**
	 * 驕ｸ謚樒ｯ�峇縺ｮ繧ｹ繧ｭ繝��蜀咲函縺ｮ迥ｶ諷九ｒ蛻�ｊ譖ｿ縺医∪縺吶\
	 */
	static readonly COMMAND_TRANSPORT_TOGGLESKIPSELECTION: string;

	/**
	 * 繧ｨ繝�ぅ繧ｿ繝ｼ繝代ロ繝ｫ縺ｮ繝励Ξ繝薙Η繝ｼ繧ｨ繝�ぅ繧ｿ繝ｼ繧貞�繧頑崛縺医∪縺吶\
	 */
	static readonly COMMAND_VIEW_ALTVIEW: string;

	/**
	 * CD 繧ｨ繝�ぅ繧ｿ繝ｼ繧定｡ｨ遉ｺ縺励∪縺吶\
	 */
	static readonly COMMAND_VIEW_CDEDITOR: string;

	/**
	 * 繧ｹ繝壹け繝医Ν陦ｨ遉ｺ隗｣蜒丞ｺｦ繧剃ｽ弱￥縺励∪縺吶\
	 */
	static readonly COMMAND_VIEW_DECREASESPECTRALRESOLUTION: string;

	/**
	 * 繝輔ぃ繧､繝ｫ繝代ロ繝ｫ繧偵き繧ｹ繧ｿ繝槭う繧ｺ縺吶ｋ縺溘ａ縺ｫ繝｡繧ｿ繝��繧ｿ縺ｮ陦ｨ遉ｺ繝\繧､繧｢繝ｭ繧ｰ繧帝幕縺阪∪縺吶\
	 */
	static readonly COMMAND_VIEW_DISPLAYFORFILESPANEL: string;

	/**
	 * 繝槭�繧ｫ繝ｼ繝代ロ繝ｫ繧偵き繧ｹ繧ｿ繝槭う繧ｺ縺吶ｋ縺溘ａ縺ｫ繝槭�繧ｫ繝ｼ縺ｮ陦ｨ遉ｺ險ｭ螳壹ム繧､繧｢繝ｭ繧ｰ繧帝幕縺阪∪縺吶\
	 */
	static readonly COMMAND_VIEW_DISPLAYFORMARKERSPANEL: string;

	/**
	 * 繝｡繧ｿ繝��繧ｿ繝代ロ繝ｫ繧偵き繧ｹ繧ｿ繝槭う繧ｺ縺吶ｋ縺溘ａ縺ｫ繝｡繧ｿ繝��繧ｿ縺ｮ陦ｨ遉ｺ險ｭ螳壹ム繧､繧｢繝ｭ繧ｰ繧帝幕縺阪∪縺吶\
	 */
	static readonly COMMAND_VIEW_DISPLAYFORMETADATAPANEL: string;

	/**
	 * 
	 */
	static readonly COMMAND_VIEW_EDITCUSTOMFRAMERATE: string;

	/**
	 * 
	 */
	static readonly COMMAND_VIEW_EDITTEMPO: string;

	/**
	 * 髢九＞縺ｦ縺�ｋ縺吶∋縺ｦ縺ｮ繝ｩ繝�け繧ｨ繝輔ぉ繧ｯ繝医え繧｣繝ｳ繝峨え繧帝撼陦ｨ遉ｺ
	 */
	static readonly COMMAND_VIEW_HIDEALLRACKEFFECTWINDOWS: string;

	/**
	 * 繧ｹ繝壹け繝医Ν陦ｨ遉ｺ隗｣蜒丞ｺｦ繧帝ｫ倥￥縺励∪縺吶\
	 */
	static readonly COMMAND_VIEW_INCREASESPECTRALRESOLUTION: string;

	/**
	 * 繝槭Ν繝√ヨ繝ｩ繝�け繧ｨ繝�ぅ繧ｿ繝ｼ繧定｡ｨ遉ｺ縺励∪縺吶\
	 */
	static readonly COMMAND_VIEW_MULTITRACKEDITOR: string;

	/**
	 * 菴ｿ逕ｨ縺ｧ縺阪ｋ蜷�凾髢楢｡ｨ遉ｺ蠖｢蠑上ｒ鬆�↓蛻�ｊ譖ｿ縺医∪縺� (谺｡縺ｫ騾ｲ繧\)縲
	 */
	static readonly COMMAND_VIEW_NEXTTIMEDISPLAYFORMAT: string;

	/**
	 * 菴ｿ逕ｨ縺ｧ縺阪ｋ蜷�凾髢楢｡ｨ遉ｺ蠖｢蠑上ｒ鬆�↓蛻�ｊ譖ｿ縺医∪縺� (蜑阪↓謌ｻ繧�)縲
	 */
	static readonly COMMAND_VIEW_PREVIOUSTIMEDISPLAYFORMAT: string;

	/**
	 * 譎る俣繧ｹ繧ｱ繝ｼ繝ｫ縺ｮ迴ｾ蝨ｨ縺ｮ繧ｺ繝ｼ繝 繧偵�繝ｪ繧ｻ繝�ヨ 1 縺ｫ菫晏ｭ倥＠縺ｾ縺吶\
	 */
	static readonly COMMAND_VIEW_SAVEZOOMPRESET1: string;

	/**
	 * 譎る俣繧ｹ繧ｱ繝ｼ繝ｫ縺ｮ迴ｾ蝨ｨ縺ｮ繧ｺ繝ｼ繝 繧偵�繝ｪ繧ｻ繝�ヨ 2 縺ｫ菫晏ｭ倥＠縺ｾ縺吶\
	 */
	static readonly COMMAND_VIEW_SAVEZOOMPRESET2: string;

	/**
	 * 譎る俣繧ｹ繧ｱ繝ｼ繝ｫ縺ｮ迴ｾ蝨ｨ縺ｮ繧ｺ繝ｼ繝 繧偵�繝ｪ繧ｻ繝�ヨ 3 縺ｫ菫晏ｭ倥＠縺ｾ縺吶\
	 */
	static readonly COMMAND_VIEW_SAVEZOOMPRESET3: string;

	/**
	 * 譎る俣繧ｹ繧ｱ繝ｼ繝ｫ縺ｮ迴ｾ蝨ｨ縺ｮ繧ｺ繝ｼ繝 繧偵�繝ｪ繧ｻ繝�ヨ 4 縺ｫ菫晏ｭ倥＠縺ｾ縺吶\
	 */
	static readonly COMMAND_VIEW_SAVEZOOMPRESET4: string;

	/**
	 * 譎る俣繧ｹ繧ｱ繝ｼ繝ｫ縺ｮ迴ｾ蝨ｨ縺ｮ繧ｺ繝ｼ繝 繧偵�繝ｪ繧ｻ繝�ヨ 5 縺ｫ菫晏ｭ倥＠縺ｾ縺吶\
	 */
	static readonly COMMAND_VIEW_SAVEZOOMPRESET5: string;

	/**
	 * 繝薙Η繝ｼ繧貞ｾ梧婿縺ｸ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺励∪縺吶\
	 */
	static readonly COMMAND_VIEW_SCROLLLEFT: string;

	/**
	 * 1 繝壹�繧ｸ繝薙Η繝ｼ繧貞ｾ梧婿縺ｸ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺励∪縺吶\
	 */
	static readonly COMMAND_VIEW_SCROLLPAGELEFT: string;

	/**
	 * 1 繝壹�繧ｸ繝薙Η繝ｼ繧貞燕譁ｹ縺ｸ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺励∪縺吶\
	 */
	static readonly COMMAND_VIEW_SCROLLPAGERIGHT: string;

	/**
	 * 繝薙Η繝ｼ繧貞燕譁ｹ縺ｸ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺励∪縺吶\
	 */
	static readonly COMMAND_VIEW_SCROLLRIGHT: string;

	/**
	 * 蜀咲函繝倥ャ繝峨′陦ｨ遉ｺ縺輔ｌ繧九∪縺ｧ繝薙Η繝ｼ繧偵せ繧ｯ繝ｭ繝ｼ繝ｫ縺励∪縺吶\
	 */
	static readonly COMMAND_VIEW_SCROLLTOCTI: string;

	/**
	 * 驕ｸ謚樒ｯ�峇縺瑚｡ｨ遉ｺ縺輔ｌ繧九∪縺ｧ繝薙Η繝ｼ繧偵せ繧ｯ繝ｭ繝ｼ繝ｫ縺励∪縺吶\
	 */
	static readonly COMMAND_VIEW_SCROLLTOSELECTION: string;

	/**
	 * 蜀咲函縺ｮ髢句ｧ区凾髢薙′陦ｨ遉ｺ縺輔ｌ繧九∪縺ｧ繝薙Η繝ｼ繧偵せ繧ｯ繝ｭ繝ｼ繝ｫ縺励∪縺吶\
	 */
	static readonly COMMAND_VIEW_SCROLLTOSTI: string;

	/**
	 * 繝√Ε繝ｳ繝阪Ν繧呈ｳ｢蠖｢繧ｨ繝�ぅ繧ｿ繝ｼ縺瑚｡ｨ遉ｺ縺吶ｋ繧医≧縺ｫ繝翫ン繧ｲ繝ｼ繧ｷ繝ｧ繝ｳ繝舌�繧定ｨｭ螳壹＠縺ｾ縺吶\
	 */
	static readonly COMMAND_VIEW_SETNAVBARCHANNELDISPLAYFROMEDITOR: string;

	/**
	 * 繝√Ε繝ｳ繝阪Ν繧偵Ξ繧､繝､繝ｼ陦ｨ遉ｺ縺吶ｋ繧医≧縺ｫ繝翫ン繧ｲ繝ｼ繧ｷ繝ｧ繝ｳ繝舌�繧定ｨｭ螳壹＠縺ｾ縺吶\
	 */
	static readonly COMMAND_VIEW_SETNAVBARCHANNELSLAYERED: string;

	/**
	 * 繝√Ε繝ｳ繝阪Ν繧貞�蜑ｲ陦ｨ遉ｺ縺吶ｋ繧医≧縺ｫ繝翫ン繧ｲ繝ｼ繧ｷ繝ｧ繝ｳ繝舌�繧定ｨｭ螳壹＠縺ｾ縺吶\
	 */
	static readonly COMMAND_VIEW_SETNAVBARCHANNELSSEPARATED: string;

	/**
	 * 繧ｹ繝��繧ｿ繧ｹ繝舌�繧帝幕髢峨＠縺ｾ縺吶\
	 */
	static readonly COMMAND_VIEW_SHOWSTATUS: string;

	/**
	 * 繧ｹ繝壹け繝医Ν蜻ｨ豕｢謨ｰ繧ｹ繧ｱ繝ｼ繝ｫ繧定ｪｿ謨ｴ縺励\∝ｮ悟Ⅹ縺ｪ繝ｪ繝九い陦ｨ遉ｺ縺ｫ縺励∪縺吶\
	 */
	static readonly COMMAND_VIEW_SPECTRALFREQUENCYFULLLINEAR: string;

	/**
	 * 繧ｹ繝壹け繝医Ν蜻ｨ豕｢謨ｰ繧ｹ繧ｱ繝ｼ繝ｫ繧定ｪｿ謨ｴ縺励\∝ｮ悟Ⅹ縺ｪ蟇ｾ謨ｰ陦ｨ遉ｺ縺ｫ縺励∪縺吶\
	 */
	static readonly COMMAND_VIEW_SPECTRALFREQUENCYFULLLOGARITHMIC: string;

	/**
	 * 繧ｹ繝壹け繝医Ν蜻ｨ豕｢謨ｰ繧ｹ繧ｱ繝ｼ繝ｫ繧定ｪｿ謨ｴ縺励\√Μ繝九い縺ｮ繝ｬ繝吶Ν繧剃ｸ翫£縲∝ｯｾ謨ｰ縺ｮ繝ｬ繝吶Ν繧剃ｸ九£縺ｾ縺吶\
	 */
	static readonly COMMAND_VIEW_SPECTRALFREQUENCYMORELINEAR: string;

	/**
	 * 繧ｹ繝壹け繝医Ν蜻ｨ豕｢謨ｰ繧ｹ繧ｱ繝ｼ繝ｫ繧定ｪｿ謨ｴ縺励\∝ｯｾ謨ｰ縺ｮ繝ｬ繝吶Ν繧剃ｸ翫£縲√Μ繝九い縺ｮ繝ｬ繝吶Ν繧剃ｸ九£縺ｾ縺吶\
	 */
	static readonly COMMAND_VIEW_SPECTRALFREQUENCYMORELOGARITHMIC: string;

	/**
	 * 繧｢繧ｯ繝�ぅ繝悶↑繝輔ぃ繧､繝ｫ繧呈凾髢薙♀繧医�繝�Φ繝昴↓髢｢縺吶ｋ迺ｰ蠅�ｨｭ螳壹→蜷梧悄縺輔○繧九°縺ｩ縺�°繧貞�繧頑崛縺医∪縺吶\
	 */
	static readonly COMMAND_VIEW_SYNCWITHTIMEPREFS: string;

	/**
	 * 
	 */
	static readonly COMMAND_VIEW_TIMEDISPLAYFORMATBARSANDBEATS: string;

	/**
	 * 
	 */
	static readonly COMMAND_VIEW_TIMEDISPLAYFORMATCOMPACTDISC: string;

	/**
	 * 
	 */
	static readonly COMMAND_VIEW_TIMEDISPLAYFORMATCUSTOM: string;

	/**
	 * 
	 */
	static readonly COMMAND_VIEW_TIMEDISPLAYFORMATDECIMAL: string;

	/**
	 * 
	 */
	static readonly COMMAND_VIEW_TIMEDISPLAYFORMATSAMPLES: string;

	/**
	 * 
	 */
	static readonly COMMAND_VIEW_TIMEDISPLAYFORMATSMPTE23976: string;

	/**
	 * 
	 */
	static readonly COMMAND_VIEW_TIMEDISPLAYFORMATSMPTE24: string;

	/**
	 * 
	 */
	static readonly COMMAND_VIEW_TIMEDISPLAYFORMATSMPTE25: string;

	/**
	 * 
	 */
	static readonly COMMAND_VIEW_TIMEDISPLAYFORMATSMPTE2997: string;

	/**
	 * 
	 */
	static readonly COMMAND_VIEW_TIMEDISPLAYFORMATSMPTE30: string;

	/**
	 * 
	 */
	static readonly COMMAND_VIEW_TIMEDISPLAYFORMATSMPTE5994: string;

	/**
	 * 
	 */
	static readonly COMMAND_VIEW_TIMEDISPLAYFORMATSMPTE5994DROP: string;

	/**
	 * 
	 */
	static readonly COMMAND_VIEW_TIMEDISPLAYFORMATSMPTEDROP: string;

	/**
	 * 繧ｯ繝ｪ繝��繧ｨ繝輔ぉ繧ｯ繝医お繝ｳ繝吶Ο繝ｼ繝励�陦ｨ遉ｺ迥ｶ諷九ｒ蛻�ｊ譖ｿ縺医∪縺吶\
	 */
	static readonly COMMAND_VIEW_TOGGLECLIPEFFECTENVELOPES: string;

	/**
	 * 繧ｯ繝ｪ繝��繧ｲ繧､繝ｳ繧ｳ繝ｳ繝医Ο繝ｼ繝ｫ縺ｮ陦ｨ遉ｺ迥ｶ諷九ｒ蛻�ｊ譖ｿ縺医∪縺吶\
	 */
	static readonly COMMAND_VIEW_TOGGLECLIPGAINCONTROLS: string;

	/**
	 * 繧ｯ繝ｪ繝��繝代Φ繧ｨ繝ｳ繝吶Ο繝ｼ繝励�陦ｨ遉ｺ迥ｶ諷九ｒ蛻�ｊ譖ｿ縺医∪縺吶\
	 */
	static readonly COMMAND_VIEW_TOGGLECLIPPANENVELOPES: string;

	/**
	 * 繧ｯ繝ｪ繝��繝懊Μ繝･繝ｼ繝 繧ｨ繝ｳ繝吶Ο繝ｼ繝励�陦ｨ遉ｺ迥ｶ諷九ｒ蛻�ｊ譖ｿ縺医∪縺吶\
	 */
	static readonly COMMAND_VIEW_TOGGLECLIPVOLUMEENVELOPES: string;

	/**
	 * 豕｢蠖｢繝√Ε繝ｳ繝阪Ν縺ｮ濶ｲ蛻�¢陦ｨ遉ｺ繧貞�繧頑崛縺医∪縺吶\
	 */
	static readonly COMMAND_VIEW_TOGGLECOLOREDCHANNELS: string;

	/**
	 * 繧ｨ繝�ぅ繧ｿ繝ｼ繝代ロ繝ｫ繧ｳ繝ｳ繝医Ο繝ｼ繝ｫ縺ｮ陦ｨ遉ｺ迥ｶ諷九ｒ蛻�ｊ譖ｿ縺医∪縺吶\
	 */
	static readonly COMMAND_VIEW_TOGGLEEDITORCONTROLS: string;

	/**
	 * 豕｢蠖｢繧ｨ繝�ぅ繧ｿ繝ｼ縺ｨ繝槭Ν繝√ヨ繝ｩ繝�け繧ｨ繝�ぅ繧ｿ繝ｼ繧貞�繧頑崛縺医∪縺吶\
	 */
	static readonly COMMAND_VIEW_TOGGLEEDITORS: string;

	/**
	 * 繧ｨ繝�ぅ繧ｿ繝ｼ縺ｮ繝倥ャ繝峨い繝��繝�ぅ繧ｹ繝励Ξ繧､ (HUD) 縺ｮ陦ｨ遉ｺ迥ｶ諷九ｒ蛻�ｊ譖ｿ縺医∪縺吶\
	 */
	static readonly COMMAND_VIEW_TOGGLEHUD: string;

	/**
	 * 豕｢蠖｢繝√Ε繝ｳ繝阪Ν縺ｮ繝ｬ繧､繝､繝ｼ陦ｨ遉ｺ繧貞�繧頑崛縺医∪縺吶\
	 */
	static readonly COMMAND_VIEW_TOGGLELAYEREDCHANNELS: string;

	/**
	 * 繧ｹ繝壹け繝医Ν繝斐ャ繝√�陦ｨ遉ｺ繧貞�繧頑崛縺医∪縺吶\
	 */
	static readonly COMMAND_VIEW_TOGGLEPITCHDISPLAY: string;

	/**
	 * 繧ｹ繝��繧ｿ繧ｹ繝舌�縺ｧ繝槭え繧ｹ繧ｫ繝ｼ繧ｽ繝ｫ縺ｮ荳九�繝��繧ｿ縺ｮ陦ｨ遉ｺ繧貞�繧頑崛縺医∪縺吶\
	 */
	static readonly COMMAND_VIEW_TOGGLESHOWSTATUSBARDATAUNDERCURSOR: string;

	/**
	 * 繧ｹ繝��繧ｿ繧ｹ繝舌�縺ｮ繝輔ぃ繧､繝ｫ繧ｨ繝ｩ繝ｼ縲∬ｭｦ蜻翫\√♀繧医�蜃ｦ逅�せ繝��繧ｿ繧ｹ縺ｮ陦ｨ遉ｺ繧貞�繧頑崛縺医∪縺吶\
	 */
	static readonly COMMAND_VIEW_TOGGLESHOWSTATUSBARDOCMODALERRORSWARNINGS: string;

	/**
	 * 繧ｹ繝��繧ｿ繧ｹ繝舌�縺ｮ繝峨Ο繝��繧｢繧ｦ繝医＠縺溘が繝ｼ繝�ぅ繧ｪ繧､繝ｳ繧ｸ繧ｱ繝ｼ繧ｿ繝ｼ縺ｮ陦ｨ遉ｺ繧貞�繧頑崛縺医∪縺吶\
	 */
	static readonly COMMAND_VIEW_TOGGLESHOWSTATUSBARDROPPEDAUDIO: string;

	/**
	 * 繧ｹ繝��繧ｿ繧ｹ繝舌�縺ｮ繝�Η繝ｬ繝ｼ繧ｷ繝ｧ繝ｳ諠⒦ ｱ縺ｮ陦ｨ遉ｺ繧貞�繧頑崛縺医∪縺吶\
	 */
	static readonly COMMAND_VIEW_TOGGLESHOWSTATUSBARDURATION: string;

	/**
	 * 繧ｹ繝��繧ｿ繧ｹ繝舌�縺ｮ遨ｺ縺榊ｮｹ驥乗ュ蝣ｱ縺ｮ陦ｨ遉ｺ繧貞�繧頑崛縺医∪縺吶\
	 */
	static readonly COMMAND_VIEW_TOGGLESHOWSTATUSBARFREESPACE: string;

	/**
	 * 繧ｹ繝��繧ｿ繧ｹ繝舌�縺ｮ遨ｺ縺榊ｮｹ驥� (譎る俣謠帷ｮ励〒陦ｨ遉ｺ) 諠⒦ ｱ縺ｮ陦ｨ遉ｺ繧貞�繧頑崛縺医∪縺吶\
	 */
	static readonly COMMAND_VIEW_TOGGLESHOWSTATUSBARFREESPACETIME: string;

	/**
	 * 繧ｹ繝��繧ｿ繧ｹ繝舌�縺ｮ繧ｵ繝ｳ繝励Ν繧ｿ繧､繝玲ュ蝣ｱ縺ｮ陦ｨ遉ｺ繧貞�繧頑崛縺医∪縺吶\
	 */
	static readonly COMMAND_VIEW_TOGGLESHOWSTATUSBARSAMPLETYPE: string;

	/**
	 * 繧ｹ繝��繧ｿ繧ｹ繝舌�縺ｮ髱槫悸邵ｮ繧ｪ繝ｼ繝�ぅ繧ｪ繧ｵ繧､繧ｺ諠⒦ ｱ縺ｮ陦ｨ遉ｺ繧貞�繧頑崛縺医∪縺吶\
	 */
	static readonly COMMAND_VIEW_TOGGLESHOWSTATUSBARUNCOMPRESSEDAUDIOSIZE: string;

	/**
	 * 繧ｹ繝��繧ｿ繧ｹ繝舌�縺ｮ繝薙ョ繧ｪ繝輔Ξ繝ｼ繝 繝ｬ繝ｼ繝医�陦ｨ遉ｺ繧貞�繧頑崛縺医∪縺吶\
	 */
	static readonly COMMAND_VIEW_TOGGLESHOWSTATUSBARVIDEOFRAMERATE: string;

	/**
	 * 繧ｹ繝壹け繝医Ν蜻ｨ豕｢謨ｰ縺ｮ陦ｨ遉ｺ繧貞�繧頑崛縺医∪縺吶\
	 */
	static readonly COMMAND_VIEW_TOGGLESPECTRALDISPLAY: string;

	/**
	 * 繝薙ョ繧ｪ繝代ロ繝ｫ縺ｫ繝輔Ν隗｣蜒丞ｺｦ縺ｧ繝薙ョ繧ｪ繧定｡ｨ遉ｺ縺励∪縺吶\
	 */
	static readonly COMMAND_VIEW_VIDEODISPLAYFULLRESOLUTION: string;

	/**
	 * 蜀咲函蛛懈ｭ｢譎ゅ↓繝薙ョ繧ｪ陦ｨ遉ｺ繧偵ヵ繝ｫ隗｣蜒丞ｺｦ縺ｫ蛻�ｊ譖ｿ縺医∪縺吶\
	 */
	static readonly COMMAND_VIEW_VIDEODISPLAYFULLRESOLUTIONONSTOP: string;

	/**
	 * 繝薙ョ繧ｪ陦ｨ遉ｺ繧偵ヵ繝ｫ繧ｹ繧ｯ繝ｪ繝ｼ繝ｳ縺ｫ縺吶ｋ縺九\∝❼縺ｫ謌ｻ縺吶°繧貞�繧頑崛縺医∪縺吶\
	 */
	static readonly COMMAND_VIEW_VIDEODISPLAYFULLSCREEN: string;

	/**
	 * 繝薙ョ繧ｪ繝代ロ繝ｫ縺ｫ 1|2 隗｣蜒丞ｺｦ縺ｧ繝薙ョ繧ｪ繧定｡ｨ遉ｺ縺励∪縺吶\
	 */
	static readonly COMMAND_VIEW_VIDEODISPLAYQUARTERRESOLUTION: string;

	/**
	 * 繝薙ョ繧ｪ繝代ロ繝ｫ縺ｮ繝薙ョ繧ｪ縺ｮ繧ｵ繧､繧ｺ繧� 100% 縺ｫ險ｭ螳壹＠縺ｾ縺吶\
	 */
	static readonly COMMAND_VIEW_VIDEODISPLAYSETSCALE100: string;

	/**
	 * 繝薙ョ繧ｪ繝代ロ繝ｫ縺ｮ繝薙ョ繧ｪ縺ｮ繧ｵ繧､繧ｺ繧� 200% 縺ｫ險ｭ螳壹＠縺ｾ縺吶\
	 */
	static readonly COMMAND_VIEW_VIDEODISPLAYSETSCALE200: string;

	/**
	 * 繝薙ョ繧ｪ繝代ロ繝ｫ縺ｮ繝薙ョ繧ｪ縺ｮ繧ｵ繧､繧ｺ繧� 25% 縺ｫ險ｭ螳壹＠縺ｾ縺吶\
	 */
	static readonly COMMAND_VIEW_VIDEODISPLAYSETSCALE25: string;

	/**
	 * 繝薙ョ繧ｪ繝代ロ繝ｫ縺ｮ繝薙ョ繧ｪ縺ｮ繧ｵ繧､繧ｺ繧� 50% 縺ｫ險ｭ螳壹＠縺ｾ縺吶\
	 */
	static readonly COMMAND_VIEW_VIDEODISPLAYSETSCALE50: string;

	/**
	 * 繝薙ョ繧ｪ縺ｮ繧ｵ繧､繧ｺ繧偵ン繝�が繝代ロ繝ｫ縺ｮ繧ｵ繧､繧ｺ縺ｫ蜷医≧繧医≧縺ｫ險ｭ螳壹＠縺ｾ縺吶\
	 */
	static readonly COMMAND_VIEW_VIDEODISPLAYSETSCALEBESTFIT: string;

	/**
	 * 繝薙ョ繧ｪ繝代ロ繝ｫ縺ｫ 1|4 隗｣蜒丞ｺｦ縺ｧ繝薙ョ繧ｪ繧定｡ｨ遉ｺ縺励∪縺吶\
	 */
	static readonly COMMAND_VIEW_VIDEODISPLAYSIXTEENTHRESOLUTION: string;

	/**
	 * 繝薙ョ繧ｪ繝代ロ繝ｫ縺ｫ 1|8 隗｣蜒丞ｺｦ縺ｧ繝薙ョ繧ｪ繧定｡ｨ遉ｺ縺励∪縺吶\
	 */
	static readonly COMMAND_VIEW_VIDEODISPLAYSIXTYFOURTHRESOLUTION: string;

	/**
	 * 繧ｯ繝ｪ繝��縺ｾ縺溘�繧ｯ繝ｪ繝��繧ｨ繝�ず縺ｮ遘ｻ蜍墓凾縺ｫ邱ｨ髮��繧､繝ｳ繝医〒繝薙ョ繧ｪ繧偵�繝ｬ繝薙Η繝ｼ縺励∪縺吶\
	 */
	static readonly COMMAND_VIEW_VIDEOPREVIEWONCLIPDRAG: string;

	/**
	 * 繝薙ョ繧ｪ繧ｿ繧､繝 繧ｳ繝ｼ繝峨が繝ｼ繝舌�繝ｬ繧､繧貞�繧頑崛縺医∪縺吶\
	 */
	static readonly COMMAND_VIEW_VIDEOSHOWTIMECODE: string;

	/**
	 * 豕｢蠖｢繧ｨ繝�ぅ繧ｿ繝ｼ繧定｡ｨ遉ｺ縺励∪縺吶\
	 */
	static readonly COMMAND_VIEW_WAVEFORMEDITOR: string;

	/**
	 * 謖ｯ蟷⒤せ繧ｱ繝ｼ繝ｫ繧偵ぜ繝ｼ繝 繧､繝ｳ縺励∪縺吶\
	 */
	static readonly COMMAND_VIEW_ZOOMINAMPLITUDE: string;

	/**
	 * 譎る俣驕ｸ謚樒ｯ�峇縺ｮ繧､繝ｳ繝昴う繝ｳ繝医↓繧ｺ繝ｼ繝 繧､繝ｳ縺励∪縺吶\
	 */
	static readonly COMMAND_VIEW_ZOOMINATINPOINT: string;

	/**
	 * 譎る俣驕ｸ謚樒ｯ�峇縺ｮ繧｢繧ｦ繝医�繧､繝ｳ繝医↓繧ｺ繝ｼ繝 繧､繝ｳ縺励∪縺吶\
	 */
	static readonly COMMAND_VIEW_ZOOMINATOUTPOINT: string;

	/**
	 * 蜻ｨ豕｢謨ｰ繧ｹ繧ｱ繝ｼ繝ｫ繧偵ぜ繝ｼ繝 繧､繝ｳ縺励∪縺吶\
	 */
	static readonly COMMAND_VIEW_ZOOMINFREQUENCY: string;

	/**
	 * 譎る俣繧ｹ繧ｱ繝ｼ繝ｫ繧偵ぜ繝ｼ繝 繧､繝ｳ縺励∪縺吶\
	 */
	static readonly COMMAND_VIEW_ZOOMINTIME: string;

	/**
	 * 謖ｯ蟷⒤せ繧ｱ繝ｼ繝ｫ繧偵ぜ繝ｼ繝 繧｢繧ｦ繝医＠縺ｾ縺吶\
	 */
	static readonly COMMAND_VIEW_ZOOMOUTAMPLITUDE: string;

	/**
	 * 蜻ｨ豕｢謨ｰ繧ｹ繧ｱ繝ｼ繝ｫ繧偵ぜ繝ｼ繝 繧｢繧ｦ繝医＠縺ｾ縺吶\
	 */
	static readonly COMMAND_VIEW_ZOOMOUTFREQUENCY: string;

	/**
	 * 縺吶∋縺ｦ縺ｮ繧ｹ繧ｱ繝ｼ繝ｫ縺ｮ繧ｺ繝ｼ繝 繧偵Μ繧ｻ繝�ヨ縺励∪縺吶\
	 */
	static readonly COMMAND_VIEW_ZOOMOUTFULL: string;

	/**
	 * 蝙ら峩譁ｹ蜷代�繧ｺ繝ｼ繝 繧偵Μ繧ｻ繝�ヨ縺励∪縺吶\
	 */
	static readonly COMMAND_VIEW_ZOOMOUTFULLALLTRACKS: string;

	/**
	 * 驕ｸ謚槭＠縺溘ヨ繝ｩ繝�け縺ｧ蜈ｨ菴薙↓繧ｺ繝ｼ繝 繧｢繧ｦ繝医＠縺ｾ縺吶\
	 */
	static readonly COMMAND_VIEW_ZOOMOUTFULLSELECTEDTRACK: string;

	/**
	 * 譎る俣繧ｹ繧ｱ繝ｼ繝ｫ繧偵ぜ繝ｼ繝 繧｢繧ｦ繝医＠縺ｾ縺吶\
	 */
	static readonly COMMAND_VIEW_ZOOMOUTTIME: string;

	/**
	 * 謖ｯ蟷⒤せ繧ｱ繝ｼ繝ｫ縺ｮ繧ｺ繝ｼ繝 繧偵Μ繧ｻ繝�ヨ縺励∪縺吶\
	 */
	static readonly COMMAND_VIEW_ZOOMRESETAMPLITUDE: string;

	/**
	 * 蜻ｨ豕｢謨ｰ繧ｹ繧ｱ繝ｼ繝ｫ縺ｮ繧ｺ繝ｼ繝 繧偵Μ繧ｻ繝�ヨ縺励∪縺吶\
	 */
	static readonly COMMAND_VIEW_ZOOMRESETFREQUENCY: string;

	/**
	 * 譎る俣繧ｹ繧ｱ繝ｼ繝ｫ縺ｮ繧ｺ繝ｼ繝 繧偵Μ繧ｻ繝�ヨ縺励∪縺吶\
	 */
	static readonly COMMAND_VIEW_ZOOMRESETTIME: string;

	/**
	 * 驕ｸ謚槭＠縺溘ヨ繝ｩ繝�け縺ｧ蜈ｨ菴薙↓繧ｺ繝ｼ繝 繧､繝ｳ縺励∪縺吶\
	 */
	static readonly COMMAND_VIEW_ZOOMSELECTEDTRACK: string;

	/**
	 * 譎る俣繧ｹ繧ｱ繝ｼ繝ｫ 繧偵�繝ｪ繧ｻ繝�ヨ 1 縺ｫ繧ｺ繝ｼ繝 縺励∪縺吶\
	 */
	static readonly COMMAND_VIEW_ZOOMTOPRESET1: string;

	/**
	 * 譎る俣繧ｹ繧ｱ繝ｼ繝ｫ繧偵�繝ｪ繧ｻ繝�ヨ 2 縺ｫ繧ｺ繝ｼ繝 縺励∪縺吶\
	 */
	static readonly COMMAND_VIEW_ZOOMTOPRESET2: string;

	/**
	 * 譎る俣繧ｹ繧ｱ繝ｼ繝ｫ繧偵�繝ｪ繧ｻ繝�ヨ 3 縺ｫ繧ｺ繝ｼ繝 縺励∪縺吶\
	 */
	static readonly COMMAND_VIEW_ZOOMTOPRESET3: string;

	/**
	 * 譎る俣繧ｹ繧ｱ繝ｼ繝ｫ 繧偵�繝ｪ繧ｻ繝�ヨ 4 縺ｫ繧ｺ繝ｼ繝 縺励∪縺吶\
	 */
	static readonly COMMAND_VIEW_ZOOMTOPRESET4: string;

	/**
	 * 譎る俣繧ｹ繧ｱ繝ｼ繝ｫ繧偵�繝ｪ繧ｻ繝�ヨ 5 縺ｫ繧ｺ繝ｼ繝 縺励∪縺吶\
	 */
	static readonly COMMAND_VIEW_ZOOMTOPRESET5: string;

	/**
	 * 驕ｸ謚槭＠縺溘け繝ｪ繝��蜈ｨ菴薙↓繧ｺ繝ｼ繝 繧､繝ｳ縺励∪縺吶\
	 */
	static readonly COMMAND_VIEW_ZOOMTOSELECTEDCLIPS: string;

	/**
	 * 譎る俣驕ｸ謚樒ｯ�峇繧偵ぜ繝ｼ繝
	 */
	static readonly COMMAND_VIEW_ZOOMTOSELECTION: string;

	/**
	 * 譎る俣驕ｸ謚樒ｯ�峇縺ｮ繧､繝ｳ繝昴う繝ｳ繝医↓繧ｺ繝ｼ繝 繧､繝ｳ縺励∪縺吶\
	 */
	static readonly COMMAND_VIEW_ZOOMWAYINATINPOINT: string;

	/**
	 * 譎る俣驕ｸ謚樒ｯ�峇縺ｮ繧｢繧ｦ繝医�繧､繝ｳ繝医↓繧ｺ繝ｼ繝 繧､繝ｳ縺励∪縺吶\
	 */
	static readonly COMMAND_VIEW_ZOOMWAYINATOUTPOINT: string;

	/**
	 * 謖ｯ蟷⒨ｵｱ險医ヱ繝阪Ν繧帝幕髢峨＠縺ｾ縺吶\
	 */
	static readonly COMMAND_WINDOW_AMPLITUDESTATISTICS: string;

	/**
	 * 險ｺ譁ｭ繝代ロ繝ｫ繧帝幕髢峨＠縺ｾ縺吶\
	 */
	static readonly COMMAND_WINDOW_ANALYSISEFFECTS: string;

	/**
	 * 繧ｨ繝�そ繝ｳ繧ｷ繝｣繝ｫ繧ｵ繧ｦ繝ｳ繝峨ヱ繝阪Ν繧帝幕髢峨＠縺ｾ縺吶\
	 */
	static readonly COMMAND_WINDOW_BASICADJUSTMENTS: string;

	/**
	 * 繝舌ャ繝∝㍎逅�ヱ繝阪Ν繧帝幕髢峨＠縺ｾ縺吶\
	 */
	static readonly COMMAND_WINDOW_BATCHPROCESS: string;

	/**
	 * 繧ｯ繝ｪ繝��縺ｮ繝励Ο繝代ユ繧｣繝代ロ繝ｫ繧帝幕縺阪∪縺吶\
	 */
	static readonly COMMAND_WINDOW_CLIPPROPERTIES: string;

	/**
	 * 
	 */
	static readonly COMMAND_WINDOW_CONSOLE: string;

	/**
	 * 
	 */
	static readonly COMMAND_WINDOW_DEBUGMONITOR: string;

	/**
	 * 
	 */
	static readonly COMMAND_WINDOW_DEBUGRENDERGRAPH: string;

	/**
	 * 繧ｨ繝�ぅ繧ｿ繝ｼ繝代ロ繝ｫ繧帝幕髢峨＠縺ｾ縺吶\
	 */
	static readonly COMMAND_WINDOW_EDITOR: string;

	/**
	 * 繧ｨ繝輔ぉ繧ｯ繝医Λ繝�け繝代ロ繝ｫ繧帝幕髢峨＠縺ｾ縺吶\
	 */
	static readonly COMMAND_WINDOW_EFFECTSRACK: string;

	/**
	 * 繝�Φ繝励Ξ繝ｼ繝医ヱ繝阪Ν繧帝幕縺上°髢峨§縺ｾ縺吶\
	 */
	static readonly COMMAND_WINDOW_FAVORITES: string;

	/**
	 * 繝輔ぃ繧､繝ｫ繝代ロ繝ｫ繧帝幕髢峨＠縺ｾ縺吶\
	 */
	static readonly COMMAND_WINDOW_FILES: string;

	/**
	 * 蜻ｨ豕｢謨ｰ蛻�梵繝代ロ繝ｫ繧帝幕髢峨＠縺ｾ縺吶\
	 */
	static readonly COMMAND_WINDOW_FREQUENCYANALYSIS: string;

	/**
	 * 繝偵せ繝医Μ繝ｼ繝代ロ繝ｫ繧帝幕髢峨＠縺ｾ縺吶\
	 */
	static readonly COMMAND_WINDOW_HISTORY: string;

	/**
	 * 繝ｬ繝吶Ν繝｡繝ｼ繧ｿ繝ｼ繝代ロ繝ｫ繧帝幕髢峨＠縺ｾ縺吶\
	 */
	static readonly COMMAND_WINDOW_LEVELS: string;

	/**
	 * 繝槭�繧ｫ繝ｼ繝代ロ繝ｫ繧帝幕髢峨＠縺ｾ縺吶\
	 */
	static readonly COMMAND_WINDOW_MARKERS: string;

	/**
	 * 繝ｩ繧ｦ繝峨ロ繧ｹ繧剃ｸ\閾ｴ繝代ロ繝ｫ繧帝幕縺阪∪縺吶\ゅヱ繝阪Ν縺碁幕縺�※縺�ｋ蝣ｴ蜷医�縲√ヱ繝阪Ν繧帝哩縺倥∪縺吶\
	 */
	static readonly COMMAND_WINDOW_MATCHVOLUME: string;

	/**
	 * 繝｡繝�ぅ繧｢繝悶Λ繧ｦ繧ｶ繝ｼ繝代ロ繝ｫ繧帝幕髢峨＠縺ｾ縺吶\
	 */
	static readonly COMMAND_WINDOW_MEDIABROWSER: string;

	/**
	 * 繝｡繧ｿ繝��繧ｿ繝代ロ繝ｫ繧帝幕髢峨＠縺ｾ縺吶\
	 */
	static readonly COMMAND_WINDOW_METADATA: string;

	/**
	 * 繧ｦ繧｣繝ｳ繝峨え繧呈怙蟆丞喧縺励∪縺吶\
	 */
	static readonly COMMAND_WINDOW_MINIMIZE: string;

	/**
	 * 繝溘く繧ｵ繝ｼ繝代ロ繝ｫ繧帝幕髢峨＠縺ｾ縺吶\
	 */
	static readonly COMMAND_WINDOW_MIXER: string;

	/**
	 * 繝輔ぉ繝ｼ繧ｺ蛻�梵繝代ロ繝ｫ繧帝幕髢峨＠縺ｾ縺吶\
	 */
	static readonly COMMAND_WINDOW_PHASEANALYSIS: string;

	/**
	 * 繝輔ぉ繝ｼ繧ｺ繝｡繝ｼ繧ｿ繝ｼ繝代ロ繝ｫ繧帝幕髢峨＠縺ｾ縺吶\
	 */
	static readonly COMMAND_WINDOW_PHASEMETER: string;

	/**
	 * 蜀咲函繝ｪ繧ｹ繝医ヱ繝阪Ν繧帝幕髢峨＠縺ｾ縺吶\
	 */
	static readonly COMMAND_WINDOW_PLAYLIST: string;

	/**
	 * 迺ｰ蠅�ｨｭ螳壹ヱ繝阪Ν繧帝幕髢峨＠縺ｾ縺吶\
	 */
	static readonly COMMAND_WINDOW_PROPERTIES: string;

	/**
	 * 驕ｸ謚� | 繝薙Η繝ｼ繝代ロ繝ｫ繧帝幕髢峨＠縺ｾ縺吶\
	 */
	static readonly COMMAND_WINDOW_SELECTIONVIEW: string;

	/**
	 * 繧ｻ繝�す繝ｧ繝ｳ縺ｮ繝励Ο繝代ユ繧｣繝代ロ繝ｫ繧帝幕縺阪∪縺吶\
	 */
	static readonly COMMAND_WINDOW_SESSIONPROPERTIES: string;

	/**
	 * 繝医Λ繝�け繝代Φ繝九Φ繧ｰ繝代ロ繝ｫ繧帝幕髢峨＠縺ｾ縺吶\
	 */
	static readonly COMMAND_WINDOW_SURROUNDPANNER: string;

	/**
	 * 譎る俣繝代ロ繝ｫ繧帝幕髢峨＠縺ｾ縺吶\
	 */
	static readonly COMMAND_WINDOW_TIME: string;

	/**
	 * 繧｢繧ｯ繝�ぅ繝悶↑繝輔Ξ繝ｼ繝 縺ｮ譛\螟ｧ繧ｵ繧､繧ｺ縺ｨ讓呎ｺ悶し繧､繧ｺ繧貞�繧頑崛縺医ｋ縲
	 */
	static readonly COMMAND_WINDOW_TOGGLEMAXIMIZEACTIVEFRAME: string;

	/**
	 * 繝��繝ｫ繝舌�繧帝幕髢峨＠縺ｾ縺吶\
	 */
	static readonly COMMAND_WINDOW_TOOLS: string;

	/**
	 * 繝医Λ繝�け繝代ロ繝ｫ繧帝幕髢峨＠縺ｾ縺吶\
	 */
	static readonly COMMAND_WINDOW_TRACKS: string;

	/**
	 * 繝医Λ繝ｳ繧ｹ繝昴�繝医ヱ繝阪Ν繧帝幕髢峨＠縺ｾ縺吶\
	 */
	static readonly COMMAND_WINDOW_TRANSPORT: string;

	/**
	 * 
	 */
	static readonly COMMAND_WINDOW_UINODESPY: string;

	/**
	 * 繝薙ョ繧ｪ繝代ロ繝ｫ繧帝幕髢峨＠縺ｾ縺吶\
	 */
	static readonly COMMAND_WINDOW_VIDEO: string;

	/**
	 * 繧ｺ繝ｼ繝 繝代ロ繝ｫ繧帝幕髢峨＠縺ｾ縺吶\
	 */
	static readonly COMMAND_WINDOW_ZOOM: string;

	/**
	 * 繝ｯ繝ｼ繧ｯ繧ｹ繝壹�繧ｹ邱ｨ髮�ム繧､繧｢繝ｭ繧ｰ繧帝幕縺阪\∽ｿ晏ｭ倥＠縺溘Ρ繝ｼ繧ｯ繧ｹ繝壹�繧ｹ縺ｮ蜑企勁縺ｾ縺溘�荳ｦ縺ｹ譖ｿ縺医ｒ陦後＞縺ｾ縺吶\
	 */
	static readonly COMMAND_WORKSPACE_EDITWORKSPACES: string;

	/**
	 * 迴ｾ蝨ｨ縺ｮ繝ｯ繝ｼ繧ｯ繧ｹ繝壹�繧ｹ繧偵Θ繝ｼ繧ｶ繝ｼ謖㍾ｮ壹�蜷榊燕縺ｧ菫晏ｭ倥＠縺ｾ縺吶\
	 */
	static readonly COMMAND_WORKSPACE_NEWWORKSPACE: string;

	/**
	 * 迴ｾ蝨ｨ縺ｮ繝ｯ繝ｼ繧ｯ繧ｹ繝壹�繧ｹ縺ｫ蜉 縺医◆螟画峩繧貞❼縺ｫ謌ｻ縺励\∽ｿ晏ｭ倥＠縺溘Ρ繝ｼ繧ｯ繧ｹ繝壹�繧ｹ縺ｮ繝ｬ繧､繧｢繧ｦ繝医↓繝ｪ繧ｻ繝�ヨ縺励∪縺吶\
	 */
	static readonly COMMAND_WORKSPACE_RESETWORKSPACE: string;

	/**
	 * 繝ｯ繝ｼ繧ｯ繧ｹ繝壹�繧ｹ縺ｮ迴ｾ蝨ｨ縺ｮ繝ｬ繧､繧｢繧ｦ繝医ｒ蠕後〒蜻ｼ縺ｳ蜃ｺ縺帙ｋ繧医≧縺ｫ菫晏ｭ倥＠縺ｾ縺吶\
	 */
	static readonly COMMAND_WORKSPACE_SAVEWORKSPACE: string;

	/**
	 * 繝ｯ繝ｼ繧ｯ繧ｹ繝壹�繧ｹ繝｡繝九Η繝ｼ縺ｮ 1 逡ｪ逶ｮ縺ｮ繝ｯ繝ｼ繧ｯ繧ｹ繝壹�繧ｹ縺ｫ蛻�ｊ譖ｿ縺医ｋ縲
	 */
	static readonly COMMAND_WORKSPACE_WORKSPACE1: string;

	/**
	 * 繝ｯ繝ｼ繧ｯ繧ｹ繝壹�繧ｹ繝｡繝九Η繝ｼ縺ｮ 2 逡ｪ逶ｮ縺ｮ繝ｯ繝ｼ繧ｯ繧ｹ繝壹�繧ｹ縺ｫ蛻�ｊ譖ｿ縺医ｋ縲
	 */
	static readonly COMMAND_WORKSPACE_WORKSPACE2: string;

	/**
	 * 繝ｯ繝ｼ繧ｯ繧ｹ繝壹�繧ｹ繝｡繝九Η繝ｼ縺ｮ 3 逡ｪ逶ｮ縺ｮ繝ｯ繝ｼ繧ｯ繧ｹ繝壹�繧ｹ縺ｫ蛻�ｊ譖ｿ縺医ｋ縲
	 */
	static readonly COMMAND_WORKSPACE_WORKSPACE3: string;

	/**
	 * 繝ｯ繝ｼ繧ｯ繧ｹ繝壹�繧ｹ繝｡繝九Η繝ｼ縺ｮ 4 逡ｪ逶ｮ縺ｮ繝ｯ繝ｼ繧ｯ繧ｹ繝壹�繧ｹ縺ｫ蛻�ｊ譖ｿ縺医ｋ縲
	 */
	static readonly COMMAND_WORKSPACE_WORKSPACE4: string;

	/**
	 * 繝ｯ繝ｼ繧ｯ繧ｹ繝壹�繧ｹ繝｡繝九Η繝ｼ縺ｮ 5 逡ｪ逶ｮ縺ｮ繝ｯ繝ｼ繧ｯ繧ｹ繝壹�繧ｹ縺ｫ蛻�ｊ譖ｿ縺医ｋ縲
	 */
	static readonly COMMAND_WORKSPACE_WORKSPACE5: string;

	/**
	 * 繝ｯ繝ｼ繧ｯ繧ｹ繝壹�繧ｹ繝｡繝九Η繝ｼ縺ｮ 6 逡ｪ逶ｮ縺ｮ繝ｯ繝ｼ繧ｯ繧ｹ繝壹�繧ｹ縺ｫ蛻�ｊ譖ｿ縺医ｋ縲
	 */
	static readonly COMMAND_WORKSPACE_WORKSPACE6: string;

	/**
	 * 繝ｯ繝ｼ繧ｯ繧ｹ繝壹�繧ｹ繝｡繝九Η繝ｼ縺ｮ 7 逡ｪ逶ｮ縺ｮ繝ｯ繝ｼ繧ｯ繧ｹ繝壹�繧ｹ縺ｫ蛻�ｊ譖ｿ縺医ｋ縲
	 */
	static readonly COMMAND_WORKSPACE_WORKSPACE7: string;

	/**
	 * 繝ｯ繝ｼ繧ｯ繧ｹ繝壹�繧ｹ繝｡繝九Η繝ｼ縺ｮ 8 逡ｪ逶ｮ縺ｮ繝ｯ繝ｼ繧ｯ繧ｹ繝壹�繧ｹ縺ｫ蛻�ｊ譖ｿ縺医ｋ縲
	 */
	static readonly COMMAND_WORKSPACE_WORKSPACE8: string;

	/**
	 * 繝ｯ繝ｼ繧ｯ繧ｹ繝壹�繧ｹ繝｡繝九Η繝ｼ縺ｮ 9 逡ｪ逶ｮ縺ｮ繝ｯ繝ｼ繧ｯ繧ｹ繝壹�繧ｹ縺ｫ蛻�ｊ譖ｿ縺医ｋ縲
	 */
	static readonly COMMAND_WORKSPACE_WORKSPACE9: string;

	/**
	 * Get the currently active document.
	 */
	readonly activeDocument: Document;

	/**
	 * Application build number
	 */
	readonly buildNumber: string;

	/**
	 * Get currently opened documents
	 */
	readonly documents: Array;

	/**
	 * Engine local persistent settings.
	 */
	readonly localPreferences: Preferences;

	/**
	 * Path of the application executable.
	 */
	readonly location: string;

	/**
	 * Application name
	 */
	readonly name: string;

	/**
	 * Application platform
	 */
	readonly platform: string;

	/**
	 * Playing recording and navigating time
	 */
	readonly transport: object;

	/**
	 * Application version
	 */
	readonly version: string;

	/**
	 * 
	 */
	static addEventListener(): any;

	/**
	 * 
	 */
	static dispatchEvent(): any;

	/**
	 * 
	 * @param command Invokes a particular application command by its identifier string. These are similar to the commands shown in the Keyboard Shortcuts dialog. Returns true on success.
	 */
	invokeCommand(command: string): boolean;

	/**
	 * 
	 * @param command Returns true if the current application command is checked.
	 */
	isCommandChecked(command: string): boolean;

	/**
	 * 
	 * @param command Returns true if the current application command is enabled and can be called in the current state.
	 */
	isCommandEnabled(command: string): boolean;

	/**
	 * 
	 * @param openParameter Open a document using specified DocumentOpenParameter.
	 */
	openDocument(openParameter: DocumentOpenParameter): Document;

	/**
	 * Quit application
	 */
	quit(): boolean;

	/**
	 * 
	 */
	static removeEventListener(): any;

}

/**
 * Parameter to export as FCP xml.
 */
declare class FCPXMLExportParameter {
	/**
	 * Copy referenced documents.
	 */
	copyReferencedDocuments: boolean;

	/**
	 * Parameter for export referenced documents.
	 */
	copyReferencedDocumentsParams: object;

	/**
	 * Include metadata and marker on save as.
	 */
	includeMetadata: boolean;

	/**
	 * 
	 * @param copyReferencedDocumentsParams Create a new instance.
	 */
	constructor(copyReferencedDocuments: boolean, includeMetadata: boolean, copyReferencedDocumentsParams: MultitrackReferencedDocumentsCopyParameter);

}

/**
 * Command event object
 */
declare class CommandEvent {
	/**
	 * A command is about to be invoked
	 */
	static readonly EVENT_INVOKE_COMMAND: string;

	/**
	 * Description of the command.
	 */
	readonly description: string;

	/**
	 * Command ID.
	 */
	readonly id: number;

	/**
	 * Name of the command.
	 */
	readonly name: string;

	/**
	 * Title of the command.
	 */
	readonly title: string;

}

/**
 * This is the base class for all document types. There are also specialized types for certain document types like e.g. WaveDocument
 */
declare class Document {
	/**
	 * 
	 */
	readonly ancestor: any;

	/**
	 * The dirty state of the document
	 */
	dirty: boolean;

	/**
	 * Display name of the document as shown in the UI. It doesn't necessarily refers to the file name without filename extension.
	 */
	readonly displayName: string;

	/**
	 * Unique identifier of this document.
	 */
	readonly id: string;

	/**
	 * Returns a platform-specific path to the document on disk or empty if it doesn't currently have a path.
	 */
	readonly path: string;

}

/**
 * This events is fired if one or more documents related event happened.
 */
declare class DocumentEvent {
	/**
	 * This event is fired after a document was activated.
	 */
	static readonly EVENT_ACTIVATED: string;

	/**
	 * This event is fired after the busy state of the document has changed.
	 */
	static readonly EVENT_BUSY: string;

	/**
	 * This event is fired when a document was closed.
	 */
	static readonly EVENT_CLOSED: string;

	/**
	 * This event is fired after the dirty state of the document has changed.
	 */
	static readonly EVENT_DIRTY: string;

	/**
	 * This event is fired after a document was exported.
	 */
	static readonly EVENT_EXPORTED: string;

	/**
	 * This event is fired when a document was created or opened.
	 */
	static readonly EVENT_NEW: string;

	/**
	 * This event is fired after a document was saved.
	 */
	static readonly EVENT_SAVED: string;

	/**
	 * This event is fired after the time selection of a document has changed.
	 */
	static readonly EVENT_TIMESELECTIONCHANGED: string;

	/**
	 * Document object. With some events like e.g. DocumentEvent.Closed this property might be null.
	 */
	readonly document: object;

	/**
	 * Unique document ID.
	 */
	readonly documentID: string;

	/**
	 * Document file path.
	 */
	readonly path: string;

}

/**
 * This events is fired if a document was opened or created.
 */
declare class DocumentNewEvent {
	/**
	 * This event is fired when a document was created or opened.
	 */
	static readonly EVENT_NEW: string;

	/**
	 * Document object. With some events like e.g. DocumentEvent.Closed this property might be null.
	 */
	readonly document: object;

	/**
	 * Unique document ID.
	 */
	readonly documentID: string;

	/**
	 * Document file path.
	 */
	readonly path: string;

	/**
	 * true if the document was created by the user.
	 */
	readonly userCreated: boolean;

}

/**
 * A set of parameters used to open an existing document
 */
declare class DocumentOpenParameter {
	/**
	 * Full path of document
	 */
	path: string;

	/**
	 * 
	 * @param documentPath Construct a new DocumentOpenParameter object
	 */
	constructor(documentPath: string);

}

/**
 * This events propagates changes of the Audition transport like e.g. playback started.
 */
declare class TransportEvent {
	/**
	 * This event is fired when looping was switched on.
	 */
	static readonly EVENT_LOOPSTARTED: string;

	/**
	 * This event is fired when looping was switched off.
	 */
	static readonly EVENT_LOOPSTOPPED: string;

	/**
	 * This event is fired when the currently active player has paused to play.
	 */
	static readonly EVENT_PAUSESTARTED: string;

	/**
	 * This event is fired when the currently active player has unpaused to play.
	 */
	static readonly EVENT_PAUSESTOPPED: string;

	/**
	 * This event is fired when the currently active player has started to play.
	 */
	static readonly EVENT_PLAYERSTARTED: string;

	/**
	 * This event is fired when the currently active player has stopped to play.
	 */
	static readonly EVENT_PLAYERSTOPPED: string;

	/**
	 * This event is fired when the currently active player has started to record.
	 */
	static readonly EVENT_RECORDSTARTED: string;

	/**
	 * This event is fired when the currently active player has stopped to record.
	 */
	static readonly EVENT_RECORDSTOPPED: string;

}

/**
 * The Transport object provides access to the Audition transport layer.
 */
declare class Transport {
	/**
	 * true if playback or recording is paused
	 */
	readonly isPaused: boolean;

	/**
	 * true if playing is enabled
	 */
	readonly isPlayEnabled: boolean;

	/**
	 * true if currently playing audio
	 */
	readonly isPlaying: boolean;

	/**
	 * true if recording is enabled
	 */
	readonly isRecordEnabled: boolean;

	/**
	 * true if currently recording audio
	 */
	readonly isRecording: boolean;

	/**
	 * enable|disable looping
	 */
	loop: boolean;

	/**
	 * pause|unpause playing or recording audio
	 */
	pause(): boolean;

	/**
	 * start|continue playing current audio
	 */
	play(): boolean;

	/**
	 * start|continue recording audio
	 */
	record(): boolean;

	/**
	 * stop playing or recording audio
	 */
	stop(): boolean;

}

/**
 * Collection of all audio tracks of the according multitrack document as a mixed collection consiting of audio clip tracks, audio bus tracks and the master track. If accessed by index then the index starts with audio clip tracks, followed by audio bus tracks and the master track as the last entry.
 */
declare class MixedAudioTrackCollection {
	/**
	 * Collection of all audio bus tracks of the multitrack document.
	 */
	readonly audioBusTracks: AudioTrackCollection;

	/**
	 * Collection of all audio clip tracks of the multitrack document.
	 */
	readonly audioClipTracks: AudioTrackCollection;

	/**
	 * Returns an audio track by its index
	 */
	readonly index: AudioTrack;

	/**
	 * Number of audio tracks.
	 */
	readonly length: number;

	/**
	 * The master track of the multitrack document.
	 */
	readonly masterTrack: AudioTrack;

	/**
	 * 
	 * @param trackType Add new track
	 */
	add(layout: AudioChannelLayout, trackType: number): AudioTrack;

	/**
	 * 
	 * @param name Return audio track by its name
	 */
	getAudioTrack(name: string): AudioTrack;

	/**
	 * 
	 * @param track Remove track
	 */
	remove(track: AudioTrack): boolean;

}

/**
 * Onboarding Support
 */
declare class OnboardingSupport {
	/**
	 * 
	 */
	readonly currentUserUID: string;

	/**
	 * Construct new OnboardingSupportObject object
	 */
	constructor();

	/**
	 * 
	 */
	indicateMainMenuItem(CommandID: string): boolean;

	/**
	 * 
	 * @param stepData WorkflowStatus : [String] workflow step action WorkflowID : [String] workflow guid WorkflowName : [String] name WorkflowSessionID : [String] session identifier WorkflowAttempts : [Number] number of attempts WorkflowStepsTotal : [Number] total number of steps WorkflowDurationMS : [Number] duration
	 */
	onWorkflowAction(stepData: object): boolean;

	/**
	 * 
	 * @param stepData WorkflowStatus : [String] workflow step action WorkflowID : [String] workflow guid WorkflowName : [String] name WorkflowSessionID : [String] session identifier WorkflowAttempts : [Number] number of attempts WorkflowStepsTotal : [Number] total number of steps WorkflowStepInteractivity : [String] step interactivity WorkflowStep : [Number] current step WorkflowStepDurationMS : [Number] duration WorkflowStepRetries : [Number] number of retries WorkflowDurationMS : [Number] duration
	 */
	onWorkflowStepAction(stepData: object): boolean;

}

/**
 * A CompoundDocument is a container document which consists of 0..n sub documents.
 */
declare class CompoundDocument {
	/**
	 * 
	 */
	readonly ancestor: any;

	/**
	 * The dirty state of the document
	 */
	dirty: boolean;

	/**
	 * Display name of the document as shown in the UI. It doesn't necessarily refers to the file name without filename extension.
	 */
	readonly displayName: string;

	/**
	 * true if the compound document contains Audio.
	 */
	readonly hasAudio: boolean;

	/**
	 * true if the compound document contains Video.
	 */
	readonly hasVideo: boolean;

	/**
	 * Unique identifier of this document.
	 */
	readonly id: string;

	/**
	 * Returns a platform-specific path to the document on disk or empty if it doesn't currently have a path.
	 */
	readonly path: string;

	/**
	 * The subDocuments of this document.
	 */
	readonly subDocuments: Array;

}

/**
 * Parameter to export MultitrackDocument to OMF.
 */
declare class OMFExportParameter {
	/**
	 * Encapsulate referenced files into the OMF file.
	 */
	encapsulate: boolean;

	/**
	 * File format of referenced files. If not set then keep the original format.
	 */
	referencedFileFormat: object;

	/**
	 * Sample type conversion Parameter for referenced files. If not set then keep the original format.
	 */
	sampleTypeConversion: object;

	/**
	 * Trim referenced files to clip length.
	 */
	trimParameter: object;

	/**
	 * 
	 * @param trimParameter Create a new instance.
	 */
	constructor(encapsulate: boolean, referencedFileFormat: AudioFileFormat, sampleTypeConversion: SampleTypeConvertParameters, trimParameter: MultitrackReferencedDocumentsTrimParameter);

}

/**
 * An event to inform about succes or failures of an add multitrack document to queue operation.
 */
declare class AMEAddMultitrackDocumentToQueueEvent {
	/**
	 * An event with this type is propagated if a multitrack document failed to be added to the Adobe Media Encoder queue
	 * Add to queue failed event type
	 */
	static readonly EVENT_ADDMULTITRACKDOCUMENTTOQUEUE_ERROR: string;

	/**
	 * An event with this type is propagated if a multitrack document was added to the Adobe Media Encoder queue successfully
	 * Add to queue succeeded event type
	 */
	static readonly EVENT_ADDMULTITRACKDOCUMENTTOQUEUE_SUCCESS: string;

	/**
	 * Provides additional information for this event esspecially in the case of an error.
	 */
	readonly message: string;

}

/**
 * Sample type conversion parameter.
 */
declare class SampleTypeConvertParameters {
	/**
	 * Dither type gaussian
	 */
	readonly DITHERTYPE_GAUSSIAN: number;

	/**
	 * Dither type gaussian shaped
	 */
	readonly DITHERTYPE_GAUSSIAN_SHAPED: number;

	/**
	 * Dither type triangular
	 */
	readonly DITHERTYPE_TRIANGULAR: number;

	/**
	 * Dither type triangular shaped
	 */
	readonly DITHERTYPE_TRIANGULARS_HAPED: number;

	/**
	 * Dither adaptive mode constant
	 */
	readonly DITHER_ADAPTIVE_MODE_CONSTANT: number;

	/**
	 * Dither adaptive mode dynamic extreme
	 */
	readonly DITHER_ADAPTIVE_MODE_DYNAMIC_EX: number;

	/**
	 * Dither adaptive mode dynamic light
	 */
	readonly DITHER_ADAPTIVE_MODE_DYNAMIC_LIGHT: number;

	/**
	 * Dither adaptive mode dynamic medium
	 */
	readonly DITHER_ADAPTIVE_MODE_DYNAMIC_MEDIUM: number;

	/**
	 * Dither adaptive mode off
	 */
	readonly DITHER_ADAPTIVE_MODE_OFF: number;

	/**
	 * High pass noise shaping
	 */
	readonly NOISESHAPING_HIGH_PASS: number;

	/**
	 * Light slope noise shaping
	 */
	readonly NOISESHAPING_LIGHT_SLOPE: number;

	/**
	 * Neutral heavy noise shaping
	 */
	readonly NOISESHAPING_NEUTRAL_HEAVY: number;

	/**
	 * Neutral light noise shaping
	 */
	readonly NOISESHAPING_NEUTRAL_LIGHT: number;

	/**
	 * No noise shaping
	 */
	readonly NOISESHAPING_NONE: number;

	/**
	 * U-Shaped deep noise shaping
	 */
	readonly NOISESHAPING_USHAPED_DEEP: number;

	/**
	 * U-Shaped medium noise shaping
	 */
	readonly NOISESHAPING_USHAPED_MEDIUM: number;

	/**
	 * U-Shaped shallow noise shaping
	 */
	readonly NOISESHAPING_USHAPED_SHALLOW: number;

	/**
	 * Weighted heavy noise shaping
	 */
	readonly NOISESHAPING_WEIGHTED_HEAVY: number;

	/**
	 * Weighted light noise shaping
	 */
	readonly NOISESHAPING_WEIGHTED_LIGHT: number;

	/**
	 * Take same bit depth as the source
	 */
	readonly SOURCE_BIT_DEPTH: number;

	/**
	 * Take same channel layout as the source
	 */
	readonly SOURCE_CHANNEL_LAYOUT: object;

	/**
	 * Take same sample rate as the source
	 */
	readonly SOURCE_SAMPLE_RATE: number;

	/**
	 * New bit depth
	 */
	bitDepth: number;

	/**
	 * Channel layout
	 */
	channelLayout: object;

	/**
	 * Dithering adaptive mode
	 */
	ditherAdaptiveMode: number;

	/**
	 * Crossover 13 .. 28.8 kHz
	 */
	ditherCrossover: number;

	/**
	 * Noise shaping
	 */
	ditherNoiseShaping: number;

	/**
	 * Dither strength 1..50 dB
	 */
	ditherStrength: number;

	/**
	 * Dither type triangular or gaussian
	 */
	ditherType: number;

	/**
	 * Left mix 0..1
	 */
	leftMix: number;

	/**
	 * Resample quality 0..1
	 */
	resampleQuality: number;

	/**
	 * Right mix 0..1
	 */
	rightMix: number;

	/**
	 * Sample rate
	 */
	sampleRate: number;

	/**
	 * Use dithering
	 */
	useDithering: boolean;

	/**
	 * Use pre post filters
	 */
	useResampleFilter: boolean;

	/**
	 * Sample type conversion parameters.
	 */
	constructor();

}

/**
 * DebugDatabase class provides access to debug database.
 */
declare class DebugDatabase {
	/**
	 * 
	 * @param key Get value for a key.
	 */
	static get(key: string): string;

	/**
	 * 
	 * @param value Sets a value for a given key in Debug Database.
	 */
	static set(key: string, value: string): boolean;

}

/**
 * DebugMonitor script object
 */
declare class DebugMonitor {
	/**
	 * constructor for debug monitor
	 * constructor
	 */
	constructor();

	/**
	 * 
	 * @param categoryId removes category from opened category list
	 */
	closeCategory(categoryId: string): boolean;

	/**
	 * 
	 * @param categoryId Get debug information for an identifier
	 */
	getDebugInformation(categoryId: string): string;

	/**
	 * Get all the debug categories
	 */
	getDebugMonitorCategories(): any;

	/**
	 * get debug info of opened category of debug monitor
	 */
	getOpenedListDebugInfo(): any;

	/**
	 * 
	 * @param categoryId inserts category in opened category list
	 */
	openCategory(categoryId: string): boolean;

}

/**
 * An event to inform about the audio channel configuration of a preset.
 */
declare class AMEAudioChannelConfigurationEvent {
	/**
	 * An event with this type is propagated if a request for audio channel configuration failed
	 * Request audio channel configuration failed event type
	 */
	static readonly EVENT_REQUESTAUDIOCHANNELCONFIGURATION_ERROR: string;

	/**
	 * An event with this type is propagated if a request for audio channel configuration succeeded
	 * Request audio channel configuration succeeded event type
	 */
	static readonly EVENT_REQUESTAUDIOCHANNELCONFIGURATION_SUCCESS: string;

	/**
	 * The audio channel configuration of this preset. You have to request it by calling requestAudioChannelConfiguration beforehands.
	 */
	readonly audioChannelConfiguration: string;

}

/**
 * A small overlay window pointing to a certain point in the applications user interface
 */
declare class IndicatorOverlay {
	/**
	 * Anchor point bottom edge
	 */
	static readonly ANCHOR_BOTTOM_EDGE: number;

	/**
	 * Anchor point left edge
	 */
	static readonly ANCHOR_LEFT_EDGE: number;

	/**
	 * Anchor point right edge
	 */
	static readonly ANCHOR_RIGHT_EDGE: number;

	/**
	 * Anchor point top edge
	 */
	static readonly ANCHOR_TOP_EDGE: number;

	/**
	 * 
	 * @param trackVisibility Construct new IndicatorOverlay object
	 */
	constructor(ctrlPath: string, direction: number, text: string, animation: boolean, persistent: boolean, trackVisibility: boolean);

	/**
	 * Hide the overlay
	 */
	hide(): boolean;

	/**
	 * Show the overlay
	 */
	show(): boolean;

}

/**
 * AMEFormat represents a format of the Adobe Media Encoder
 */
declare class AMEFormat {
	/**
	 * The file name extension used by this format.
	 */
	readonly extension: string;

	/**
	 * The name of this format.
	 */
	readonly name: string;

	/**
	 * Request the available user match source and system presets for this format from Adobe Media Encoder. An event with type AMEPresetsEvent.EVENT_RequestPresetsSuccess or AMEPresetsEvent.EVENT_RequestPresetsError will be sent to notify about success or failure.
	 * Request the available presets for this format from AME.
	 */
	requestPresets(): boolean;

}

/**
 * An event to inform about formats that are availbe for running an export.
 */
declare class AMEFormatsEvent {
	/**
	 * An event with this type is propagated if a request for formats from Adobe Media Encoder failed
	 * Request formats failed event type
	 */
	static readonly EVENT_REQUESTFORMATS_ERROR: string;

	/**
	 * An event with this type is propagated if a request for formats from Adobe Media Encoder succeeded
	 * Request formats succeeded event type
	 */
	static readonly EVENT_REQUESTFORMATS_SUCCESS: string;

	/**
	 * The formats available for running an export.
	 */
	readonly formats: Array;

}

/**
 * An event to inform about the exporter settings summary of a preset.
 */
declare class AMEExporterSettingsSummaryEvent {
	/**
	 * An event with this type is propagated if a request for exporter settings summary failed
	 * Request exporter settings summary failed event type
	 */
	static readonly EVENT_REQUESTEXPORTERSETTINGSSUMMARY_ERROR: string;

	/**
	 * An event with this type is propagated if a request for exporter settings summary succeeded
	 * Request exporter settings summary succeeded event type
	 */
	static readonly EVENT_REQUESTEXPORTERSETTINGSSUMMARY_SUCCESS: string;

	/**
	 * The exporter settings summary of this preset.
	 */
	readonly exporterSettingsSummary: string;

}

/**
 * Persistence object that store/restore any values.
 */
declare class Preferences {
	/**
	 * 
	 * @param key Retrieve value as boolean
	 */
	getBoolValue(key: string): boolean;

	/**
	 * 
	 * @param key Retrieve value as number
	 */
	getNumberValue(key: string): number;

	/**
	 * 
	 * @param key Retrieve value as string
	 */
	getStringValue(key: string): string;

	/**
	 * 
	 * @param value Set value as boolean
	 */
	setBoolValue(key: string, value: boolean): boolean;

	/**
	 * 
	 * @param value Set value as number
	 */
	setNumberValue(key: string, value: number): boolean;

	/**
	 * 
	 * @param value Store value as string
	 */
	setStringValue(key: string, value: string): boolean;

}

/**
 * AMEServer represents a DynanicLink connection to Adobe Media Encoder
 */
declare class AMEServer {
	/**
	 * 
	 */
	static addEventListener(): any;

	/**
	 * 
	 * @param rangeLength Add the selected tracks of a multitrack document to the AME queue. The routing information is passed in as an array of tracks. The first track in the array will be routed to the first channels in the output file. A channel can be left unassigned by adding null to the array "trackRouting". Beside the final output file you have to specify a directory to store temporary wave files as well as the temporary project file. Optionally you can also specify the range to be exported in audio sample units. The temporary files will be deleted by AME after the export has been completed. An event with type AMEAddMultitrackDocumentToQueueEvent.EVENT_ADDMULTITRACKDOCUMENTTOQUEUE_SUCCESS or AMEAddMultitrackDocumentToQueueEvent.EVENT_ADDMULTITRACKDOCUMENTTOQUEUE_ERROR will be sent to notify about success or failure. Add the selected tracks of a multitrack document to the AME queue.
	 */
	addMultitrackDocumentAndRoutingToQueue(multitrackDocument: Document, trackRouting: Array, preset: AMEPreset, temporaryFilesDir: string, outputFile: string, rangeStart: number, rangeLength: number): boolean;

	/**
	 * 
	 * @param rangeLength Add the master track of a multitrack document to the AME queue. Beside the final output file you have to specify a directory to store temporary wave files as well as the temporary project file. Optionally you can also specify the range to be exported in audio sample units. The temporary files will be deleted by AME after the export has been completed. An event with type AMEAddMultitrackDocumentToQueueEvent.EVENT_ADDMULTITRACKDOCUMENTTOQUEUE_SUCCESS or AMEAddMultitrackDocumentToQueueEvent.EVENT_ADDMULTITRACKDOCUMENTTOQUEUE_ERROR will be sent to notify about success or failure. Add the master track of a multitrack document to the AME queue.
	 */
	addMultitrackDocumentToQueue(multitrackDocument: Document, preset: AMEPreset, temporaryFilesDir: string, outputFile: string, rangeStart: number, rangeLength: number): boolean;

	/**
	 * Connect to AME. An event with type DynamicLinkConnectionEvent.EVENT_CONNECTION will be sent to notify about success or failure.
	 * Connect to AME.
	 */
	connect(): boolean;

	/**
	 * Disconnect from AME.
	 */
	disconnect(): boolean;

	/**
	 * 
	 */
	static dispatchEvent(): any;

	/**
	 * 
	 */
	static removeEventListener(): any;

	/**
	 * Request the available formats from AME. An event with type AMEFormatsEvent.EVENT_REQUESTFORMATS_SUCCESS or AMEFormatsEvent.EVENT_REQUESTFORMATS_ERROR will be sent to notify about success or failure.
	 * Request the available formats from AME.
	 */
	requestFormats(): boolean;

}

/**
 * AMEPreset represents a single preset of Adobe Media Encoder
 */
declare class AMEPreset {
	/**
	 * The name of this preset.
	 */
	readonly name: string;

	/**
	 * Request the audio channel configuration of this preset from AME. An event with type AMEAudioChannelConfigurationEvent.EVENT_RequestAudioChannelConfigurationSuccess or AMEAudioChannelConfigurationEvent.EVENT_RequestAudioChannelConfigurationError will be sent to notify about success or failure.
	 * Request the audio channel configuration of this preset from AME.
	 */
	requestAudioChannelConfiguration(): boolean;

	/**
	 * Request the exporter settings summary of this preset from AME.Request the exporter settings summary of this preset from AME. An event with type AMEExporterSettingsSummaryEvent.EVENT_RequestExporterSettingsSummarySuccess or AMEExporterSettingsSummaryEvent.EVENT_RequestExporterSettingsSummaryError will be sent to notify about success or failure.
	 */
	requestExporterSettingsSummary(): boolean;

}

/**
 * An event to inform about the available user, match source and system presets of a format.
 */
declare class AMEPresetsEvent {
	/**
	 * An event with this type is propagated if a request for Adobe Media Encoder presets failed
	 * Request Adobe Media Encoder presets failed event type
	 */
	static readonly EVENT_REQUESTPRESETS_ERROR: string;

	/**
	 * An event with this type is propagated if a request for Adobe Media Encoder presets succeeded
	 * Request Adobe Media Encoder presets succeeded event type
	 */
	static readonly EVENT_REQUESTPRESETS_SUCCESS: string;

	/**
	 * Available match source presets for this format.
	 */
	readonly matchSourcePresets: Array;

	/**
	 * Available system presets for this format.
	 */
	readonly systemPresets: Array;

	/**
	 * Available user presets for this format.
	 */
	readonly userPresets: Array;

}

