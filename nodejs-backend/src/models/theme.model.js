
    module.exports = function (app) {
        const modelName = "theme";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            projectId: { type: Schema.Types.ObjectId, ref: "projects", comment: "ProjectId, dropdown, false, false, false, true, false, false, false, projects, projects, one-to-one, projectName," },
themeName: { type:  String , comment: "Theme Name, p, false, false, false, true, false, false, false, , , , ," },
bodyColor: { type:  String , comment: "Body Color, p, false, false, false, true, false, false, false, , , , ," },
emphasisColor: { type:  String , comment: "Emphasis Color, p, false, false, false, true, false, false, false, , , , ," },
secondaryColor: { type:  String , comment: "Secondary Color, p, false, false, false, true, false, false, false, , , , ," },
tertiaryColor: { type:  String , comment: "Tertiary Color, p, false, false, false, true, false, false, false, , , , ," },
codeColor: { type:  String , comment: "Code Color, p, false, false, false, true, false, false, false, , , , ," },
highlightColor: { type:  String , comment: "Highlight Color, p, false, false, false, true, false, false, false, , , , ," },
borderColorTranslucent: { type:  String , comment: "Border Color Translucent, p, false, false, false, true, false, false, false, , , , ," },
bodyBg: { type:  String , comment: "Body Bg, p, false, false, false, true, false, false, false, , , , ," },
borderColor: { type:  String , comment: "Border Color, p, false, false, false, true, false, false, false, , , , ," },
highlightBg: { type:  String , comment: "Highlight Bg, p, false, false, false, true, false, false, false, , , , ," },
secondaryBg: { type:  String , comment: "Secondary Bg, p, false, false, false, true, false, false, false, , , , ," },
tertiaryBg: { type:  String , comment: "Tertiary Bg, p, false, false, false, true, false, false, false, , , , ," },
formInvalidBorderColor: { type:  String , comment: "Form Invalid Border Color, p, false, false, false, true, false, false, false, , , , ," },
formInvalidColor: { type:  String , comment: "Form Invalid Color, p, false, false, false, true, false, false, false, , , , ," },
formValidBorderColor: { type:  String , comment: "Form Valid Border Color, p, false, false, false, true, false, false, false, , , , ," },
formValidColor: { type:  String , comment: "Form Valid Color, p, false, false, false, true, false, false, false, , , , ," },
headingColor: { type:  String , comment: "Heading Color, p, false, false, false, true, false, false, false, , , , ," },
linkColor: { type:  String , comment: "Link Color, p, false, false, false, true, false, false, false, , , , ," },
linkHoverColor: { type:  String , comment: "Link Hover Color, p, false, false, false, true, false, false, false, , , , ," },
primary: { type:  String , comment: "Primary, p, false, false, false, true, false, false, false, , , , ," },
primaryBgSubtle: { type:  String , comment: "Primary Bg Subtle, p, false, false, false, true, false, false, false, , , , ," },
primaryBorderSubtle: { type:  String , comment: "Primary Border Subtle, p, false, false, false, true, false, false, false, , , , ," },
primaryTextEmphasis: { type:  String , comment: "Primary Text Emphasis, p, false, false, false, true, false, false, false, , , , ," },
secondary: { type:  String , comment: "Secondary, p, false, false, false, true, false, false, false, , , , ," },
secondaryBgSubtle: { type:  String , comment: "Secondary Bg Subtle, p, false, false, false, true, false, false, false, , , , ," },
secondaryBorderSubtle: { type:  String , comment: "Secondary Border Subtle, p, false, false, false, true, false, false, false, , , , ," },
secondaryTextEmphasis: { type:  String , comment: "Secondary Text Emphasis, p, false, false, false, true, false, false, false, , , , ," },
tertiary: { type:  String , comment: "Tertiary, p, false, false, false, true, false, false, false, , , , ," },
tertiaryBgSubtle: { type:  String , comment: "Tertiary Bg Subtle, p, false, false, false, true, false, false, false, , , , ," },
tertiaryBorderSubtle: { type:  String , comment: "Tertiary Border Subtle, p, false, false, false, true, false, false, false, , , , ," },
tertiaryTextEmphasis: { type:  String , comment: "Tertiary Text Emphasis, p, false, false, false, true, false, false, false, , , , ," },
success: { type:  String , comment: "Success, p, false, false, false, true, false, false, false, , , , ," },
successBgSubtle: { type:  String , comment: "Success Bg Subtle, p, false, false, false, true, false, false, false, , , , ," },
successBorderSubtle: { type:  String , comment: "Success Border Subtle, p, false, false, false, true, false, false, false, , , , ," },
successTextEmphasis: { type:  String , comment: "Success Text Emphasis, p, false, false, false, true, false, false, false, , , , ," },
info: { type:  String , comment: "Info, p, false, false, false, true, false, false, false, , , , ," },
infoBgSubtle: { type:  String , comment: "Info Bg Subtle, p, false, false, false, true, false, false, false, , , , ," },
infoBorderSubtle: { type:  String , comment: "Info Border Subtle, p, false, false, false, true, false, false, false, , , , ," },
infoTextEmphasis: { type:  String , comment: "Info Text Emphasis, p, false, false, false, true, false, false, false, , , , ," },
danger: { type:  String , comment: "Danger, p, false, false, false, true, false, false, false, , , , ," },
dangerBgSubtle: { type:  String , comment: "Danger Bg Subtle, p, false, false, false, true, false, false, false, , , , ," },
dangerBorderSubtle: { type:  String , comment: "Danger Border Subtle, p, false, false, false, true, false, false, false, , , , ," },
dangerTextEmphasis: { type:  String , comment: "Danger Text Emphasis, p, false, false, false, true, false, false, false, , , , ," },
warning: { type:  String , comment: "Warning, p, false, false, false, true, false, false, false, , , , ," },
warningBgSubtle: { type:  String , comment: "Warning Bg Subtle, p, false, false, false, true, false, false, false, , , , ," },
warningBorderSubtle: { type:  String , comment: "Warning Border Subtle, p, false, false, false, true, false, false, false, , , , ," },
warningTextEmphasis: { type:  String , comment: "Warning Text Emphasis, p, false, false, false, true, false, false, false, , , , ," },
dark: { type:  String , comment: "Dark, p, false, false, false, true, false, false, false, , , , ," },
darkBgSubtle: { type:  String , comment: "Dark Bg Subtle, p, false, false, false, true, false, false, false, , , , ," },
darkBorderSubtle: { type:  String , comment: "Dark Border Subtle, p, false, false, false, true, false, false, false, , , , ," },
darkTextEmphasis: { type:  String , comment: "Dark Text Emphasis, p, false, false, false, true, false, false, false, , , , ," },
bodyColorRgb: { type:  String , comment: "Body Color Rgb, p, false, false, false, true, false, false, false, , , , ," },
emphasisColorRgb: { type:  String , comment: "Emphasis Color Rgb, p, false, false, false, true, false, false, false, , , , ," },
linkColorRgb: { type:  String , comment: "Link Color Rgb, p, false, false, false, true, false, false, false, , , , ," },
linkHoverColorRgb: { type:  String , comment: "Link Hover Color Rgb, p, false, false, false, true, false, false, false, , , , ," },
tertiaryColorRgb: { type:  String , comment: "Tertiary Color Rgb, p, false, false, false, true, false, false, false, , , , ," },
secondaryBgRgb: { type:  String , comment: "Secondary Bg Rgb, p, false, false, false, true, false, false, false, , , , ," },
tertiaryBgRgb: { type:  String , comment: "Tertiary Bg Rgb, p, false, false, false, true, false, false, false, , , , ," },
lightBorderSubtle: { type:  String , comment: "Light Border Subtle, p, false, false, false, true, false, false, false, , , , ," },
lightTextEmphasis: { type:  String , comment: "Light Text Emphasis, p, false, false, false, true, false, false, false, , , , ," },
isDefault: { type: Boolean, required: false, comment: "isDefault, p_boolean, false, false, false, true, false, false, false, , , , ," },

            createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
            updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true }
          },
          {
            timestamps: true
        });
      
       
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };